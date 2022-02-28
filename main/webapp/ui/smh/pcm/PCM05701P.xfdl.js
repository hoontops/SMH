(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05701P");
            this.set_titletext("체공 사유 입력");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("INPUTWAITINGCODE");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,300);
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
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_reasonCode", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,"253","70","28","100",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("Toolbar_Cancel2");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"253","70","28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","20","70","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("LotNo.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","100","70",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","10.00%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("체공 사유 입력");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("ALLOCATESALESORDERLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_REASONCODE","20","sta_LOTID:5","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("체공사유");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DELAYREASON");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_REASONCODE","100","95",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_cbo_reasonCode");
            obj.set_codecolumn("REASONCODEID");
            obj.set_datacolumn("REASONCODENAME");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_DELAYCOMMENT","20","sta_REASONCODE:5","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("UNIQUENESS");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_DELAYCOMMENT","30","141",null,null,"20","57",null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_REASONCODE","value","ds_search","DELAYCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","txa_DELAYCOMMENT","value","ds_search","DELAYCOMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM05701P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 체공사유입력 팝업
         * 파일명 		: PCM05701P.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.2.16
          * 설  명		: 체공사유입력
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.13	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.setColumn(0, "LOTID", this.parent.lotId);
        	this.ds_search.setColumn(0, "CHECKTIME", this.parent.checkTime);
        	this.fn_ReasonCodeCbo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
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
        	switch(trId)
        	{
        		case "selectReasonCodeByProcess" :
        		{
        			this.ds_search.setColumn(0,"DELAYCODE",this.ds_cbo_reasonCode.getColumn(0, "REASONCODEID"));
        			break;
        		}
        		case "saveAbnormalOccurenceByDelayLot" :
        		{
        			if(errCD == 0)
        			{
        				this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        				this.opener.fv_rtnValue = "OK";
        				this.close();
        			}
        			break;
        		}
        		default:
        		{
        		}
        		break;
        	}

        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
         this.fn_ReasonCodeCbo = function ()
         {
        	this.ds_cbo_reasonCode.clearData();
        	this.ds_search.setColumn(0, "REASONCODECLASSID", "QCLockInWaitingTime");

        	var sSvcID 			= "selectReasonCodeByProcess";
        	var sController 	= "/pcm05700/selectReasonCodeByProcess.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_cbo_reasonCode=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         }
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

        	var sSvcID 			= "saveAbnormalOccurenceByDelayLot";
        	var sController 	= "/pcm05700/saveAbnormalOccurenceByDelayLot.do";
        	var sInDatasets 	= "ds_search=ds_search";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PCM05701P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
