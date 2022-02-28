(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03300P1");
            this.set_titletext("수축율 측정 Data 조회");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("SHRINKMEASUREDATA");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamShrinkmeasuremMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTDATAFM\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEABNORMALYN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamShrinkmeasureDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKMEASURECODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","20","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("측정 DATA");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREDATA");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dataInfo","20","sta_subTitle:0",null,"121","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_qamShrinkmeasuremMaster");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"측정일시\" wordWrap=\"char\" tooltiptext=\"MEASUREDATETIME\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:MEASUREDATE\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"LOT 투입일\" wordWrap=\"char\" tooltiptext=\"LOTINPUTDATE\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:LOTSTARTDATE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"측정기\" wordWrap=\"char\" tooltiptext=\"MEASUREEQUIPMENT\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:EQUIPMENTNAME\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"측정자\" wordWrap=\"char\" tooltiptext=\"MEASURER\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:GAUGER\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"Rev\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFVERSION\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"3\" col=\"1\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"측정공정명\" tooltiptext=\"MEASUREPROCESSSEGMENTNAME\"/><Cell row=\"3\" col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"4\" col=\"1\" text=\"bind:LOTID\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"측정상태\" tooltiptext=\"MEASURESTATE\"/><Cell row=\"4\" col=\"3\" text=\"bind:PROCESSSTATE\" displaytype=\"combotext\" combocodecol=\"C,WipProcessState,,Y,N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_shrinkmeasure","20","grd_dataInfo:10",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_qamShrinkmeasureDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Running\"/><Cell col=\"1\" colspan=\"2\" text=\"X축\"/><Cell col=\"3\" colspan=\"2\" text=\"Y축\"/><Cell col=\"5\" colspan=\"2\" text=\"XY축\"/><Cell row=\"1\" col=\"1\" text=\"측정값_X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"2\" text=\"측정값_X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"3\" text=\"측정값_Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"4\" text=\"측정값_Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"5\" text=\"측정값_XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"6\" text=\"측정값_XY2\" tooltiptext=\"XY2\"/></Band><Band id=\"body\"><Cell text=\"bind:SHRINKMEASURECODE\" displaytype=\"combotext\" combocodecol=\"C,ShrinkMeasureCode,,Y,N\"/><Cell col=\"1\" text=\"bind:VALUE_X1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"2\" text=\"bind:VALUE_X2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"3\" text=\"bind:VALUE_Y1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"4\" text=\"bind:VALUE_Y2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"5\" text=\"bind:VALUE_XY1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"6\" text=\"bind:VALUE_XY2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"24","90","24","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("측정값 출력");
            obj.set_tooltiptext("MEASUREPRINT");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03300P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03300P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03300P1.xfdl", function() {
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
        	this.ds_qamShrinkmeasuremMaster.clearData();
        	this.ds_qamShrinkmeasureDetail.clearData();

        	var nRow = this.ds_qamShrinkmeasuremMaster.addRow();
        	this.ds_qamShrinkmeasuremMaster.copyRow(nRow, this.opener.ds_qamShrinkmeasure, this.parent.rowPos);

        	var sSvcID 			= "selectQamShrinkmeasurePopupList";
        	var sController 	= "/qam03300/selectQamShrinkmeasurePopupList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets  	= "ds_qamShrinkmeasureDetail=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SHRINKMEASUREID", this.parent.arg_shrinkmeasureid);
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
        			case "selectQamShrinkmeasurePopupList":
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
         /*
         * 기능 : 측정값 출력
         */
        this.fn_printData = function(obj,e)
        {
        	var objDs  = this.ds_qamShrinkmeasuremMaster, rowPos = objDs.rowposition;
        	if(rowPos < 0) {
        		return;
        	}

        	var shrinkmeasureid = "["+objDs.getColumn(0, "SHRINKMEASUREID")+"]";
          	var oArg = {
          		sRptPath   : "/QAM/",
          		sRptName   : "QAM03300R.mrd",
          		strField   : shrinkmeasureid,
          		bModalless : false
          	};

          	var sOption = "titletext=수축율 측정값,modeless=false";
          	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnClose.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btn_print.addEventHandler("onclick",this.fn_printData,this);
        };
        this.loadIncludeScript("QAM03300P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
