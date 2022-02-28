(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00900P1");
            this.set_titletext("자주/최종 NCR 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKRESULTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abnormalPopupList", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISADDED\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"762","70",null,"20","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","10","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자주/최종 NCR");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0580");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"762","70",null,"btn_close:5","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeTop",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Div("div_ncrProcess","31.00%","40",null,null,"20","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_ncrProcess");
            obj.set_async("false");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Div("div_info","20","44",null,null,"div_ncrProcess:5","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_info");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_abnormalOccurrenceInfo","0","0",null,null,"0","0",null,null,null,null,this.div_info.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_binddataset("ds_qamIssue");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"30\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"30\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"30\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"body\"><Cell colspan=\"4\" cssclass=\"cell_headMaster\" text=\"제품정보\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"char\" tooltiptext=\"PRODUCTINFO\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"2\" text=\"품목명\" cssclass=\"cell_head\" padding=\"0px 5px 0px 0px\" tooltiptext=\"ITEMNAME\"/><Cell row=\"2\" col=\"1\" colspan=\"3\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"모 Lot\" padding=\"0px 5px 0px 0px\" tooltiptext=\"PARENTLOTID\"/><Cell row=\"3\" col=\"1\" colspan=\"3\" text=\"bind:PARENTLOTID\"/><Cell row=\"4\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"4\" col=\"1\" colspan=\"3\" text=\"bind:LOTID\"/><Cell row=\"5\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" tooltiptext=\"PNLQTY\"/><Cell row=\"5\" col=\"1\" text=\"bind:PANELQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" tooltiptext=\"PCSQTY\"/><Cell row=\"5\" col=\"3\" text=\"bind:PCSQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell row=\"6\" colspan=\"4\" cssclass=\"cell_headMaster\" text=\"공정정보(발견정보)\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"char\" tooltiptext=\"PROCESSSEGMENTINFO\"/><Cell row=\"7\" cssclass=\"cell_head\" text=\"대공정명\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" tooltiptext=\"TOPPROCESSSEGMENTCLASSNAME\"/><Cell row=\"7\" col=\"1\" colspan=\"3\" text=\"bind:TOPPROCESSSEGMENTCLASSNAME\"/><Cell row=\"8\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"중공정명\" tooltiptext=\"MIDDLEPROCESSSEGMENTCLASSNAME\"/><Cell row=\"8\" col=\"1\" colspan=\"3\" text=\"bind:MIDDLEPROCESSSEGMENTCLASSNAME\"/><Cell row=\"9\" text=\"공정명\" cssclass=\"cell_head\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"9\" col=\"1\" colspan=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell row=\"10\" cssclass=\"cell_head\" text=\"검사구분\" tooltiptext=\"FINISHINSPECTIONTYPE\"/><Cell row=\"10\" col=\"1\" colspan=\"3\" text=\"bind:INSPECTIONDEFNAME\"/><Cell row=\"11\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"작업장\" tooltiptext=\"AREA\"/><Cell row=\"11\" col=\"1\" colspan=\"3\" text=\"bind:AREANAME\"/><Cell row=\"12\" cssclass=\"cell_head\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/><Cell row=\"12\" col=\"1\" colspan=\"3\" text=\"bind:INSPECTIONUSER\"/><Cell row=\"13\" colspan=\"4\" textAlign=\"left\" text=\"불량정보\" cssclass=\"cell_headMaster\" padding=\"0px 0px 0px 5px\" wordWrap=\"char\" tooltiptext=\"DEFECTINFO\"/><Cell row=\"14\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"불량코드 명\" cssclass=\"cell_head\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"14\" col=\"1\" colspan=\"3\" text=\"bind:DEFECTCODENAME\"/><Cell row=\"15\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"품질공정 명\" tooltiptext=\"QCSEGMENTNAME\"/><Cell row=\"15\" col=\"1\" colspan=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell row=\"16\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell row=\"16\" col=\"1\" text=\"bind:DECISIONDEGREE\"/><Cell row=\"16\" col=\"2\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"검사수량\" tooltiptext=\"INSPECTQTY\"/><Cell row=\"16\" col=\"3\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell row=\"17\" cssclass=\"cell_head\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell row=\"17\" col=\"1\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell row=\"17\" col=\"2\" text=\"불량률\" cssclass=\"cell_head\" tooltiptext=\"DEFECTRATE\"/><Cell row=\"17\" col=\"3\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell row=\"18\" colspan=\"4\" text=\"원인정보\" textAlign=\"left\" cssclass=\"cell_headMaster\" padding=\"0px 0px 0px 5px\" wordWrap=\"char\" tooltiptext=\"REASONINFO\"/><Cell row=\"19\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"원인품목명\" tooltiptext=\"REASONPRODUCTDEFNAME\"/><Cell row=\"19\" col=\"1\" colspan=\"3\" text=\"bind:REASONCONSUMABLEDEFNAME\"/><Cell row=\"20\" text=\"원인 품목 Rev\" cssclass=\"cell_head\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell row=\"20\" col=\"1\" colspan=\"3\" text=\"bind:REASONCONSUMABLEDEFVERSION\"/><Cell row=\"21\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"21\" col=\"1\" colspan=\"3\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell row=\"22\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell row=\"22\" col=\"1\" colspan=\"3\" text=\"bind:REASONSEGMENTNAME\"/><Cell row=\"23\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/><Cell row=\"23\" col=\"1\" colspan=\"3\" text=\"bind:REASONAREANAME\"/><Cell row=\"24\" cssclass=\"cell_head\" wordWrap=\"char\" padding=\"0px 5px 0px 0px\" text=\"사유코드 명\" tooltiptext=\"REASONCODENAME\"/><Cell row=\"24\" col=\"1\" colspan=\"3\" text=\"bind:REASONCODENAME\"/></Band></Format></Formats>");
            this.div_info.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,800,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00900P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00900P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00900P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: CAR 요청팝업
         * 파일명 		: QAM01200P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.08
         *
         * 설  명		: 자주/최종검사/품질규격 > 품질규격 이상발생> CAR 요청팝업
         * 				  품질 규격 측정값중 NG가 발생한 항목들에 대해 CAR 요청을 할 수 있다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.08	권혜영   	최초작성
         * 2021.08.18   20210818    메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
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
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.fv_isUpdateRow = false;

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
            this.ds_qamIssue.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(nRow, "ABNOCRTYPE",    this.ds_qamIssue.getColumn(0, "ABNOCRTYPE")); //
        	this.ds_search.setColumn(nRow, "ABNOCRNO",      this.ds_qamIssue.getColumn(0, "ABNOCRNO"));	//이상번호

            var sSvcID        = "selectAffectLotInspAbnormalPopupList";
            var sController   = "/qam00900/selectAffectLotInspAbnormalPopupList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_abnormalPopupList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : AffectLot 추가
         */
        this.fn_add = function(obj,e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//하위 NCR 진행현황 DIV form의 save 함수 호출(QAM01200D1.xfdl)
        	this.div_ncrProcess.form.fn_save();
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
        	this.ds_qamIssue.clearData();
        	this.ds_qamIssue.addRow();
        	//rowPos
        	this.ds_qamIssue.copyRow(0, this.opener.ds_abnormalOccurrenceList, this.parent.rowPos)

        	//div 동적으로 폼 연결
        	this.div_ncrProcess.set_url("qam::QAM01200D1.xfdl");
        	this.div_ncrProcess.form.fn_formInit(this.ds_qamIssue, "QAM00900", this.MENU_AUTH);

        	if (this.ds_qamIssue.getColumn(0, "ISMODIFY") != "Y")
        	{
        		this.btnSave.set_enable(false);
        	}

        	//20210818 메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
        	this.qamfn_ncrMenuAuth(this.INS_AUTH_YN, this.UPD_AUTH_YN, this.DEL_AUTH_YN);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        /*
         * 기능 : div 영역에서 save 후에 호출될 함수. 현재 팝업 닫고, opener 새로 검색 (만약에 opener search 안할 경우에는 this.fn_close 호출
         */
        this.fn_closeAndParentSearch = function()
        {
        	this.opener.fn_search();
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.btn_closeTop.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("QAM00900P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
