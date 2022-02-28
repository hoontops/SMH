(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01800P7");
            this.set_cssclass("form_PopupBg");
            this.set_titletext("원인공정 POPUP DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(490,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_defectReasonProcesssegment", this);
            obj._setContents("<ColumnInfo><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_defectReasonProcesssegment","0","0","490","210",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.getSetter("position").set("absolute");
            obj.set_autofittype("col");
            obj.set_border("1px solid darkgray");
            obj.set_binddataset("ds_defectReasonProcesssegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"239\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"USERSEQUENCE\" text=\"공정수순\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTNAME\" text=\"공정명\"/><Cell col=\"2\" tooltiptext=\"AREANAME\" text=\"작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:AREANAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",490,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("QAM01800P7.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 원인공정 POPUP DIV(품질관리-불량품 인수등록)
         * 파일명 		: QAM01800P7.xfdl
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
        this.fn_searchReasonProcesssegment = function (pParentLotId, pVersion)
        {
        	var sSvcID        = "selectGetDefectReasonProcesssegment";
            var sController   = "/qampopup/selectGetDefectReasonProcesssegment.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectReasonProcesssegment=output";
        	var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.gf_getLanguageType());
        		sArgs        += this.gfn_setParam("LOTID",         pParentLotId);
                sArgs        += this.gfn_setParam("VERSION",       pVersion);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Grid 에서 Body 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         */
         this.grd_defectReasonProcesssegment_oncellclick = function(obj,e)
        {
        	this.parent.parent.pdv_process.closePopup();
        	var cboRow = this.ds_defectReasonProcesssegment.rowposition;
            var pProcessSegmentId= this.ds_defectReasonProcesssegment.getColumn(cboRow, "PROCESSSEGMENTID");
        	var pProcessSegmentName= this.ds_defectReasonProcesssegment.getColumn(cboRow, "PROCESSSEGMENTNAME");
        	this.parent.parent.fn_setDefectProcesssegmentInfo(pProcessSegmentId, pProcessSegmentName);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         * 기능 : 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.
         */
        this.QAM01800P7_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onclose",this.QAM01800P6_onclose,this);
            this.grd_defectReasonProcesssegment.addEventHandler("oncellclick",this.grd_defectReasonProcesssegment_oncellclick,this);
        };
        this.loadIncludeScript("QAM01800P7.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
