(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01200P2");
            this.set_titletext("Affect Lot 추가");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamAffectLot", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISADDED\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("APPLY");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productdef_id","0","10","87","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","sta_productdef_id:10","10","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_productdef_id","edt_productdef_id:0","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","287","10","87","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("LOT#");
            obj.set_cssclass("sta_WF_label");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:10","10","165","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","47","24","39",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"11","24","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id_bakcup","570","10","79","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","62","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Affect Lot 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AFFECTLOTLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_affectLot","20","div_search:34",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamAffectLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHKALL\"/><Cell col=\"2\" colspan=\"6\" text=\"기준정보\" tooltiptext=\"STANDARD\"/><Cell col=\"8\" colspan=\"3\" text=\"위치\" tooltiptext=\"LOCATION\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"3\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell row=\"1\" col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"6\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"7\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell row=\"1\" col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"10\" text=\"Lot Locking 여부\" tooltiptext=\"REALLOTLOCKING\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" combocodecol=\"C,DecisionDegree,,Y,Y\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" combocodecol=\"C,QCDecisionType,,Y,Y\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:LOTID\"/><Cell col=\"6\" textAlign=\"right\" text=\"bind:PANELQTY\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:PCSQTY\" textAlign=\"right\" combodataset=\"ds_comboQcgrade\" combocodecol=\"QCGRADE\" combodatacol=\"QCGRADE\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" combocodecol=\"C,Condition,,Y,Y\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:AREANAME\" combocodecol=\"C,QtyDefectRateType,,Y,Y\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ISLOTLOCKING\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,450,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01200P2.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01200P2.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01200P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Affect Lot 리스트 팝업
         * 파일명 		: QAM01200P2.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.26
         *
         * 설  명		: 품질관리 > 공정품질 > 품질규격 NCR > CAR 요청팝업 > Affect Lot 리스트 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.26	권혜영   	최초작성
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
        this.qamSearchComp = this.div_search.form;
        this.abnocrno;
        this.abnocrtype;
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
        	this.ds_qamAffectLot.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.div_search.form.edt_productdef_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.div_search.form.edt_lotId.value);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "ABNOCRNO", this.abnocrno);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.abnocrtype);

        	var sSvcID 			= "selectLotToAddAffectLot";
        	var sController 	= "/qam01200/selectLotToAddAffectLot.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamAffectLot=output";
        	var sArgs 			= "";
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
        		if (trId == "selectLotToAddAffectLot")
        		{

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
        	this.div_search.form.edt_productdef_id.set_value("");
        	this.abnocrno = this.parent.abnocrno;
        	this.abnocrtype = this.parent.abnocrtype;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fn_apply = function(obj,e)
        {
        	var objDs = this.ds_qamAffectLot, parentDs = this.opener.ds_qamIssueAffectLot;
        	for (var i = 0; i < objDs.rowcount; i++) {
        		if(objDs.getColumn(i, "CHK") == "1") {
        			var nRow = parentDs.addRow();
        			parentDs.copyRow(nRow, objDs, i);
        			parentDs.setColumn(nRow, "ABNOCRNO", this.abnocrno);
        			parentDs.setColumn(nRow, "ABNOCRTYPE", this.abnocrtype);
        		}
        	}
        	this.close();
        };

        this.div_search_btnReset_onclick = function(obj,e)
        {
        	this.qamfn_setCompControl(this.div_search.form.components, "empty");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btnApply.addEventHandler("onclick",this.fn_apply,this);
            this.div_search.form.edt_productdef_id.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_search.form.btn_productdef_id.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btnReset.addEventHandler("onclick",this.div_search_btnReset_onclick,this);
        };
        this.loadIncludeScript("QAM01200P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
