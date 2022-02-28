(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03400P1");
            this.set_titletext("Lot No. 선택");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("SELECTLOTNO");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
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
            obj._setContents("<ColumnInfo><Column id=\"TXTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPRODUCTDEFIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CBOCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CBOPRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CBORTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"CBOTOPPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"CBOMIDDLEPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPRODUCTDEFNAME2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"M2QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"70","28","btnCancel:5","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
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

            obj = new Div("div_search","20","20",null,"65","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","sta_productdef:10","10","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_productdef","edt_productdef:0","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_productdefidname","297","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("품목 코드 / 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TXTPRODUCTDEFNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdefidname","sta_productdefidname:10","10","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","47","24","39",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"11","24","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","580","10","79","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_processsegment","296","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_qamProcesssegment","sta_processsegment:10","35","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_qamProcesssegment","edt_qamProcesssegment:0","35","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:10","35","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_qamProcesssegment_id","580","34","79","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_value("공정ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("공정ID (HIDDEN)");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","div_search:0","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Lot No. 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SELECTLOTNO");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","div_search:34",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"11\"/><Cell col=\"12\" colspan=\"4\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"16\" colspan=\"2\"/><Cell col=\"18\" colspan=\"2\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell col=\"20\" colspan=\"2\" text=\"시작\" tooltiptext=\"START\"/><Cell col=\"22\" colspan=\"2\" text=\"완료\" tooltiptext=\"AE32E09C00EB4B5186A601F9E9F9E86E\"/><Cell col=\"24\" colspan=\"2\" text=\"인계\" tooltiptext=\"6BBBC425B6C14107AB0ACB4E7C266334\"/><Cell col=\"26\"/><Cell row=\"1\" col=\"1\" text=\"Lot No\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"LOTTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"6\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"7\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT\"/><Cell row=\"1\" col=\"11\" text=\"UOM 명\" tooltiptext=\"UOMDEFNAME\"/><Cell row=\"1\" col=\"12\" text=\"수량\" tooltiptext=\"QTY\"/><Cell row=\"1\" col=\"13\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell row=\"1\" col=\"14\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"15\" text=\"M2수량\" tooltiptext=\"M2QTY\"/><Cell row=\"1\" col=\"16\" text=\"계획 종료일\" tooltiptext=\"LOTSTATE\"/><Cell row=\"1\" col=\"17\" text=\"잔여일수\" tooltiptext=\"M2QTY\"/><Cell row=\"1\" col=\"18\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"19\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"20\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"21\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"22\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"23\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"24\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"25\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"26\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOTTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RTRSHT\" displaytype=\"combotext\" combocodecol=\"C,RTRSHT,,Y,N\"/><Cell col=\"11\" text=\"bind:UNIT\"/><Cell col=\"12\" text=\"bind:QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:PANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:M2QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:PLANENDTIME\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"17\" text=\"bind:LEFTDATE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:RECEIVEPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:RECEIVEPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:WORKSTARTPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:WORKSTARTPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:WORKENDPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:WORKENDPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:SENDPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:SENDPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:LEADTIME\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_productdef","value","ds_search","PRODUCTDEFIDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_productdef_id","value","ds_search","TXTPRODUCTDEFNAME2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_productdefidname","value","ds_search","TXTPRODUCTDEFIDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_lotId","value","ds_search","TXTLOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_qamProcesssegment_id","value","ds_search","TXTPROCESSSEGMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03400P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03400P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03400P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT 조회
         * 파일명 		: QAM03400P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.01
         *
         * 설  명		: LOT 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.01	권혜영   	최초작성
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
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.ds_search.setColumn(0, "TXTLOTID", this.parent.arg_lotId);
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
        	this.ds_list.clearData();

        	var sSvcID 			= "selectLotIdList";
        	var sController 	= "/qam03400/selectLotIdList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_list=output";
        	var sArgs 		  	= "";
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
        		switch(trId) {
        			case "selectDurablePopupList":
        			{
        				break;
        			}
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

        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fn_selectData(this.ds_list.rowposition);
        };

        // 팝업 ok
        this.fn_selectData = function(rowPosition)
        {
        	var lotid = this.ds_list.getColumn(rowPosition, "LOTID");
        	this.qamSearchComp = this.opener.tab_search.Tabpage1.form;
        	this.opener.fv_rtnValue.push(lotid);
        	this.opener.qamfn_popupAfter("srch_lot", lotid);
        	this.close();
        }

        // edit key down
        this.fn_edtKeyDown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_search();
        	}
        };

        // 초기화
        this.div_search_btnReset_onclick = function(obj,e)
        {
        	this.qamfn_setCompControl(this.qamSearchComp.components, "empty", [Edit]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.div_search.form.edt_productdef.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_search.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.div_search.form.edt_productdefidname.addEventHandler("onkeydown",this.fn_edtKeyDown,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btnReset.addEventHandler("onclick",this.div_search_btnReset_onclick,this);
            this.div_search.form.edt_qamProcesssegment.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_search.form.btn_qamProcesssegment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.div_search.form.edt_lotId.addEventHandler("onkeydown",this.fn_edtKeyDown,this);
            this.grd_result.addEventHandler("oncelldblclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("QAM03400P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
