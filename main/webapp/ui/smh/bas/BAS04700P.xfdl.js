(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04700P");
            this.set_titletext("규격정보조회");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("SPECDETAILPOPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_spectDefinitionList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHILDEQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHARTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTCHARTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"LCL\" type=\"STRING\" size=\"256\"/><Column id=\"UCL\" type=\"STRING\" size=\"256\"/><Column id=\"LOL\" type=\"STRING\" size=\"256\"/><Column id=\"UOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","85",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("규격정보조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("SPECDETAILPOPUP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_spectDefinitionList","20","sta_title:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_spectDefinitionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"차트정보\" cssclass=\"cell_headMaster\" tooltiptext=\"CONTROLGUBUN\"/><Cell col=\"2\" colspan=\"3\" text=\"Spec\" cssclass=\"cell_headMaster\" tooltiptext=\"LBLSPEC\"/><Cell col=\"5\" colspan=\"3\" text=\"Control Limit\" cssclass=\"cell_headMaster\" tooltiptext=\"LBLCONTROLLIMIT\"/><Cell col=\"8\" colspan=\"2\" text=\"Outlier\" cssclass=\"cell_headMaster\" tooltiptext=\"LBLOUTLIER\"/><Cell row=\"1\" text=\"차트종류\" tooltiptext=\"CONTROLTYPE\"/><Cell row=\"1\" col=\"1\" text=\"기본차트\" tooltiptext=\"ISCHARTTYPE\"/><Cell row=\"1\" col=\"2\" text=\"Lower\" tooltiptext=\"LBLLOWER\"/><Cell row=\"1\" col=\"3\" text=\"Center\" tooltiptext=\"LBLCENTER\"/><Cell row=\"1\" col=\"4\" text=\"Upper\" tooltiptext=\"LBLUPPER\"/><Cell row=\"1\" col=\"5\" text=\"Lower\" tooltiptext=\"LBLLOWER\"/><Cell row=\"1\" col=\"6\" text=\"Center\" tooltiptext=\"LBLCENTER\"/><Cell row=\"1\" col=\"7\" text=\"Upper\" tooltiptext=\"LBLUPPER\"/><Cell row=\"1\" col=\"8\" text=\"Lower\" tooltiptext=\"LBLLOWER\"/><Cell row=\"1\" col=\"9\" text=\"Upper\" tooltiptext=\"LBLUPPER\"/></Band><Band id=\"body\"><Cell text=\"bind:CONTROLTYPE\" combocodecol=\"C,ControlType,,Y,Y\"/><Cell col=\"1\" text=\"bind:ISCHARTTYPE\" displaytype=\"checkboxcontrol\" maskeditautoselect=\"true\" maskeditformat=\"#,###\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"2\" text=\"bind:LSL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:SL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:USL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:LCL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"6\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\" text=\"bind:CL\"/><Cell col=\"7\" text=\"bind:UCL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:LOL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:UOL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS04700P.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04700P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 규격정보 조회
         * 파일명 		: BAS04700P.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.03.30
         *
         * 설  명		: 공정 검사기준정보 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.30	yanghee.kim   	최초작성
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
            this.ds_spectDefinitionList.clearData();

            var sSvcID        = "selectSpecDetailPopUp";
            var sController   = "/bas04700/selectSpecDetailPopUp.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_spectDefinitionList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("SPECSEQUENCE", this.parent.specSequence);
        		sArgs        += this.gfn_setParam("SPECCLASSID", this.parent.specClassId);
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
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("BAS04700P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
