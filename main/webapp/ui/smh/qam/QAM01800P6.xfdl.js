(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01800P6");
            this.set_cssclass("form_PopupBg");
            this.set_titletext("원인품목 POPUP DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,127);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_reasonConsumable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_reasonConsumable","0","0","500","127",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.getSetter("position").set("absolute");
            obj.set_binddataset("ds_reasonConsumable");
            obj.set_autofittype("col");
            obj.set_border("1px solid darkgray");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"70\"/><Column size=\"230\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"CONSUMABLEDEFID\" text=\"자재ID\"/><Cell col=\"1\" tooltiptext=\"CONSUMABLEDEFVERSION\" text=\"자재버전\"/><Cell col=\"2\" tooltiptext=\"CONSUMABLEDEFNAME\" text=\"자재명\"/><Cell col=\"3\" tooltiptext=\"MATERIALTYPE\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,127,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("QAM01800P6.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 원인품목 POPUP DIV(품질관리-불량품 인수등록)
         * 파일명 		: QAM01800P6.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.14
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.14	yanghee.kim   	최초작성
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

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
         /*
          * 기능 :
          */
        this.fn_searchReasonConsumable = function (pParentLotId, pVersion)
        {
        	var sSvcID        = "selectGetReasonConsumableList";
            var sController   = "/qampopup/selectGetReasonConsumableList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_reasonConsumable=output";
        	var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.gf_getLanguageType());
        		sArgs        += this.gfn_setParam("LOTID",         pParentLotId);
                sArgs        += this.gfn_setParam("VERSION",       pVersion);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Grid 에서 Body 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         */
        this.grd_reasonConsumable_oncellclick = function(obj,e)
        {
        	this.parent.parent.pdv_reason.closePopup();
        	var cboRow = this.ds_reasonConsumable.rowposition;
        	var consumableDefId= this.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFID");
            var consumableDefName= this.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFNAME");
        	this.parent.parent.fn_setReasonConsumbaleInfo(consumableDefId, consumableDefName);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기능 : 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.
         */
        this.QAM01800P6_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onclose",this.QAM01800P6_onclose,this);
            this.grd_reasonConsumable.addEventHandler("oncellclick",this.grd_reasonConsumable_oncellclick,this);
        };
        this.loadIncludeScript("QAM01800P6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
