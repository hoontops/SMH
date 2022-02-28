(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03100P1");
            this.set_titletext("초도측정 LOT");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("FIRSTMEASURELOT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_shrinkLotList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCOMPLETEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_firstShrinkLotList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCOMPLETEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"70","28","btnCancel:5","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
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

            obj = new Div("div_search","20","20",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","70","24","19",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","12","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:10","12","239","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","div_search:0","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Lot No. 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SELECTLOTNO");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","div_search:34","485",null,null,"58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_shrinkLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"35\"/><Column size=\"210\"/><Column size=\"135\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"투입일\" tooltiptext=\"LOTTYPE\"/><Cell col=\"4\" text=\"진행완료\" tooltiptext=\"PROCESSCOMPLETEYN\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:LOTSTARTDATE\" textAlign=\"center\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"4\" text=\"bind:PROCESSCOMPLETEYN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","grd_result:5","261","40","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_icon("url(\'image::button_right.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_minus","grd_result:5","303","40","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_icon("url(\'image::button_left.png\')");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_firstLotList","btn_minus:5","98","485",null,null,"58",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_firstShrinkLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"35\"/><Column size=\"210\"/><Column size=\"135\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"투입일\" tooltiptext=\"LOTTYPE\"/><Cell col=\"4\" text=\"진행완료\" tooltiptext=\"PROCESSCOMPLETEYN\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:LOTSTARTDATE\" textAlign=\"center\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"4\" text=\"bind:PROCESSCOMPLETEYN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","555","64","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("측정LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SELECTLOTNO");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1060,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_search.form.edt_lotId","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03100P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03100P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03100P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질관리>>수축율 관리>>수축율 측정기준 등록>>초도측정 LOT
         * 파일명 		: QAM03100P1.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.07.20
         *
         * 설  명		: 수축율 초도측정 LOT 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.07.20	yanghee.kim  	최초작성
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.grd_result.setCellProperty("HEAD", 1, "text", 0);
        	this.grd_firstLotList.setCellProperty("HEAD", 1, "text", 0);

        	this.ds_search.setColumn(0, "PLANTID",         this.parent.arg_plantId);
        	this.ds_search.setColumn(0, "SHRINKPRODUCTID", this.parent.arg_shrinkProductId);

        	this.ds_shrinkLotList.clearData();

        	var sSvcID 			= "selectMeasureMasterLotList";
        	var sController 	= "/qam03100/selectMeasureMasterLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_shrinkLotList=ds_shrinkLotList ds_firstShrinkLotList=ds_firstShrinkLotList";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_save = function (obj, e)
        {
        	this.opener.ds_firstShrinkLotList.clearData();
        	this.opener.ds_firstShrinkLotList.copyData(this.ds_firstShrinkLotList, true);

        	if (!this.gfn_dsIsUpdated(this.ds_firstShrinkLotList))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamShrinkFirstLot";
        	var sController 	= "/qam03100/saveQamShrinkFirstLot.do";
        	var sInDatasets 	= "ds_firstShrinkLotList=ds_firstShrinkLotList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

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
        	    if (trId == "selectMeasureMasterLotList")
                {
        			if (this.ds_shrinkLotList.rowcount  < 1 && this.ds_firstShrinkLotList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}else if(trId == "saveQamShrinkFirstLot"){
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.opener.fn_search();
        			this.close();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // edit key down
        this.fn_edtKeyDown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_search();
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	if(this.ds_shrinkLotList.getCaseCount("CHK == '1'") <= 0) return;

        	for(var i=this.ds_shrinkLotList.rowcount-1 ; i>= 0 ; i--)
        	{
        		if (this.ds_shrinkLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_firstShrinkLotList.addRow();
        			this.ds_shrinkLotList.setColumn(i, "CHK", "0");
        			this.ds_firstShrinkLotList.copyRow(nRow, this.ds_shrinkLotList, i);
        			this.ds_shrinkLotList.deleteRow(i);
        		}
        	}
        };

        this.btn_minus_onclick = function(obj,e)
        {
        	if(this.ds_firstShrinkLotList.getCaseCount("CHK == '1'") <= 0) return;

        	for(var i=this.ds_firstShrinkLotList.rowcount-1 ; i>= 0 ; i--)
        	{
        		if (this.ds_firstShrinkLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_shrinkLotList.addRow();
        			this.ds_firstShrinkLotList.setColumn(i, "CHK", "0");
        			this.ds_shrinkLotList.copyRow(nRow, this.ds_firstShrinkLotList, i);
        			this.ds_firstShrinkLotList.deleteRow(i);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.edt_lotId.addEventHandler("onkeydown",this.fn_edtKeyDown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_minus.addEventHandler("onclick",this.btn_minus_onclick,this);
        };
        this.loadIncludeScript("QAM03100P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
