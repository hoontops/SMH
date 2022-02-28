(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01700P");
            this.set_titletext("LOT별 불량");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("DEFECTBYLOT");
            if (Form == this.constructor)
            {
                this._setFormPosition(895,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_defectLotDefectCodeInfo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
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

            obj = new Button("btn_close",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("LOT별 불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("DEFECTBYLOT");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectLotDefectCodeInfo","20","sta_title:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectLotDefectCodeInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell col=\"1\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"2\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"3\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"4\" text=\"원인공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSDATE\" displaytype=\"date\" calendareditformat=\" yyyy-MM-dd HH:mm:ss\" calendardateformat=\" yyyy-MM-dd HH:mm:ss\"/><Cell col=\"1\" text=\"bind:AREANAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:JOINCODE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:JOINNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"5\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\" text=\"bind:DEFECTQTY\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",895,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01700P.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01700P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT별 불량(품질관리-불량품 인수등록)
         * 파일명 		: QAM01700P.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.07
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.07	yanghee.kim   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
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
            this.ds_defectLotDefectCodeInfo.clearData();

        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE", this.parent.lang);
        	this.ds_search.setColumn(nRow, "LOTID", this.parent.lotId);

            var sSvcID        = "selectGetDefectLotDefectCodeInfo";
            var sController   = "/qam01700/selectGetDefectLotDefectCodeInfo.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectLotDefectCodeInfo=output";
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
            this.grd_defectLotDefectCodeInfo.addEventHandler("onexpandup",this.tab_result_Tabpage1_grd_OSPInspectionExterior_onexpandup,this);
        };
        this.loadIncludeScript("QAM01700P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
