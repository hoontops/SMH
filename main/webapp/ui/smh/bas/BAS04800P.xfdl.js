(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00600P");
            this.set_titletext("검사Point");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("Toolbar_Inspectionpoint");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_subSelfInspectionList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPOINTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"POINTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnConfirm",null,null,"70","28","95","19",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:5",null,"70","28",null,"20",null,null,null,null,this);
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

            obj = new Static("sta_title","20","20",null,"31","400",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검사Point");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("Toolbar_Inspectionpoint");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_subSelfInspectionList","20","sta_title:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_subSelfInspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" tooltiptext=\"No\"/><Cell col=\"1\" text=\"검사 시기\" tooltiptext=\"INSPECTIONPOINTNAME\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사수량\" tooltiptext=\"LBLLOWER\"/><Cell col=\"3\" text=\"POINT수량\" tooltiptext=\"LBLCENTER\"/><Cell col=\"4\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONPOINTNAME\" combocodecol=\"C,InspectionPointName,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"###,###\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:POINTQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"###,###\" textAlign=\"right\" editinputtype=\"number\" edittype=\"mask\"/><Cell col=\"4\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"right\" combocodecol=\"C,ValidState,,Y,Y\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowSelfInspectionList",null,"26","29","24","84",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_subSelfInspectionList","btn_addRowSelfInspectionList:0","26","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy_ds_selfInspectionList","364","26","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_subSelfInspectionList","btn_delRow_ds_subSelfInspectionList:0","26","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grd_selfInspectionList","341","26","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridExport");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_subSelfInspectionList","sta_title:30","20",null,"31","268",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",520,460,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS04800P.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04800P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사Point(기본정보 - 품질관리- 자주 검사기준정보)
         * 파일명 		: BAS04800P.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.09
         *
         * 설  명		: 공정 검사기준정보 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.09	yanghee.kim   	최초작성
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
        this.fn_save = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_subSelfInspectionList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }
            //그리드 필수값 체크
            var component = this.grd_subSelfInspectionList;
            var strColIdList = "INSPECTIONPOINTNAME,VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveBasInspectionPoint";
            var sController   = "/bas04800/saveBasInspectionPoint.do";
            var sInDatasets   = "INPUT=ds_subSelfInspectionList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_subSelfInspectionList.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "INSPITEMID",      this.parent.inspItemId);
        	this.ds_search.setColumn(nRow, "INSPITEMVERSION", this.parent.inspItemVersion);
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFID", this.parent.inspectionDefId);
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFVERSION", this.parent.inspectionDefVersion);
        	this.ds_search.setColumn(nRow, "RESOURCETYPE",    this.parent.resourceType);
        	this.ds_search.setColumn(nRow, "RESOURCEID",      this.parent.processSegId);
        	this.ds_search.setColumn(nRow, "RESOURCEVERSION", this.parent.resourceVersion);
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",    this.parent.enterpriseId);
        	this.ds_search.setColumn(nRow, "PLANTID",         this.parent.plantId);
        	this.ds_search.setColumn(nRow, "VALIDSTATE",      this.parent.validState);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",    this.gf_getLanguageType());

            var sSvcID        = "selectInspectionPointByRelInfo";
            var sController   = "/bas04800/selectInspectionPointByRelInfo.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_subSelfInspectionList=output";
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
        	else
        	{
        	    if (trId == "saveBasInspectionPoint")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
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

        this.fn_close = function(obj,e)
        {
            if (this.gfn_dsIsUpdated(this.ds_subSelfInspectionList))
            {
                 var bOk = true;
        		 bOk = this.gfn_Message("IsChangedButContinue", null, "conf", "yesno");
        		 if (bOk)
        		 {
        			this.close();
        		 }
        		else
        		{
        			return false;
        		}
            }
        	else{
        		this.close();
        	}
        };

        this.fn_addSelfInspectionList = function(obj,e)
        {
            var objDataset = this.ds_subSelfInspectionList;
            if (objDataset == null) return;
            var nRow = objDataset.addRow();

        	objDataset.setColumn(nRow, "INSPITEMID",      this.parent.inspItemId);
        	objDataset.setColumn(nRow, "INSPITEMVERSION", this.parent.inspItemVersion);
        	objDataset.setColumn(nRow, "INSPECTIONDEFID", this.parent.inspectionDefId);
        	objDataset.setColumn(nRow, "INSPECTIONDEFVERSION", this.parent.inspectionDefVersion);
        	objDataset.setColumn(nRow, "RESOURCETYPE",    this.parent.resourceType);
        	objDataset.setColumn(nRow, "RESOURCEID",      this.parent.processSegId);
        	objDataset.setColumn(nRow, "RESOURCEVERSION", this.parent.resourceVersion);
        	objDataset.setColumn(nRow, "ENTERPRISEID",    this.parent.enterpriseId);
        	objDataset.setColumn(nRow, "PLANTID",         this.parent.plantId);
        	objDataset.setColumn(nRow, "VALIDSTATE",      "Valid");
        };

        this.fn_deleteSelfInspectionList = function(obj,e)
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnConfirm.addEventHandler("onclick",this.fn_save,this);
            this.btnCancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_addRowSelfInspectionList.addEventHandler("onclick",this.fn_addSelfInspectionList,this);
            this.btn_delRow_ds_subSelfInspectionList.addEventHandler("onclick",this.fn_deleteSelfInspectionList,this);
        };
        this.loadIncludeScript("BAS04800P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
