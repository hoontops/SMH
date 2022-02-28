(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D3");
            this.set_titletext("수입(원자재), 수입(원자재가공품)");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_importInspectionTreeList", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSLEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspClassMatList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSMAT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspDefinitionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTINSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspMethodItemList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTINSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","34",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","12.55%","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INSPECTIONCLASSNAME");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","Static30:5","5","250","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("수입(원자재)");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("수입(원자재)");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Div("div_treeSearch","0","100","230","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_treeItemName","15","10",null,"20","37",null,null,null,null,null,this.div_treeSearch.form);
            obj.set_taborder("0");
            this.div_treeSearch.addChild(obj.name, obj);

            obj = new Button("btn_treeItemName",null,"10","22","20","15",null,null,null,null,null,this.div_treeSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_treeSearch.addChild(obj.name, obj);

            obj = new Grid("grd_importInspectionTreeList","0","141","230",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_importInspectionTreeList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj.set_cssclass("grd_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:INSPECTIONCLASSNAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:INSPECTIONCLASSLEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title4","80.38%","66",null,"34","19",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPITEMLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspDefinitionList","608","67","75","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title3","488","66",null,"34","sta_cnt_ds_inspDefinitionList:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPITEMCLASSLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspClassMatList","358","66","88","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title2","240","66",null,"34","sta_cnt_ds_inspClassMatList:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("자재분류리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPECTIONCLASSMATLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_inspMethodItemList","80.00%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspMethodItemList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"2\" text=\"검사항목유형\" tooltiptext=\"INSPITEMTYPE\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_end,cell_point\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPITEMTYPE\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_inspDefinitionList","488","100",null,null,"grd_inspMethodItemList:10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspDefinitionList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONMETHODNAME\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"3\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"4\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"5\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"6\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONDEFNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"3\" text=\"bind:CREATOR\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_inspClassMatList","240","100",null,null,"grd_inspDefinitionList:10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspClassMatList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재분류\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONCLASSMAT\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point,cell_end\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONCLASSNAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,MaterialClass,,Y,Y\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspDefinitionList",null,"72","29","24","sta_title4:11",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowInspDefinitionList",null,"72","26","24","btn_xlDn_grd_inspDefinitionList:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspDefinitionList",null,"72","26","24","btn_delRowInspDefinitionList:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspClassMatList","449","72","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspMethodItemList",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",958,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS04300D3.xfdl", function() {
        /***************************************************************************************
         * 시스템명     : IFC MES시스템
         * 업무명         : 검사정의별 유형관리(기준관리 - 품질기준정보)
         * 파일명         : bas04300M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.17
         *
         * 설  명        : 검사종류가 수입(원자재), 수입(원자재가공품) 일 경우 등록/수정
         *---------------------------------------------------------------------------------------
         * 변경일        변경자        변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.17 yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.g_parentSrch = this.parent.parent.tab_search.Tab1.form;
        this.enterpriseid = "";
        this.g_positionA;  //저장 후 위치고정을 위한 전역변수(자재분류)
        this.g_positionB;  //저장 후 위치고정을 위한 전역변수(검사방법)
        this.g_inspectionClassId; //
        this.g_searchInspectionClassId; //조회조건의 검사 종류

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function(obj,e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
            //this.div_subTitle.form.edt_insepctionclassname.set_value(this.g_parentSrch.cbo_insepctionclassname.text);

            this.g_searchInspectionClassId = this.g_parentSrch.cbo_insepctionclassname.value;

            if (this.g_searchInspectionClassId == "RawInspection")
            {
                this.g_inspectionClassId = "MaterialClass";
            }
            else
            {
                this.g_inspectionClassId = "ConsumableType";
            }
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

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
                if (trId == "selectInspClassMatList")
                {
                    if (this.ds_inspClassMatList.rowcount > 0)
                    {
                        this.ds_inspClassMatList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionA))
                        {
                            this.parent.parent.fn_findRowSetPosition(this.ds_inspClassMatList, "INSPECTIONCLASSMAT", "g_positionA");
                        }
                        else
                        {
                            this.ds_inspClassMatList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_inspClassMatList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectInspDefinitionList")
                {
                    if (this.ds_inspDefinitionList.rowcount > 0)
                    {
                        this.ds_inspDefinitionList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionB))
                        {
                            this.parent.parent.fn_findRowSetPosition(this.ds_inspDefinitionList, "INSPECTIONMETHODID", "g_positionB");
                        }
                        else
                        {
                            this.ds_inspDefinitionList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_inspDefinitionList.set_rowposition(-1);
                    }
                }
                else if (trId == "saveImportInsp")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchImportInspTreeList();
                    this.fn_searchInspClassMatList();
                }
            }
        };
        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
          this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=600,height=500";

            oArg.arg_type = "A";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if (popupId == "GRD_INSPMETHOD")    /*그리드-검사방법*/
            {
                opts = "width=450,height=500";
                oArg.arg_type = "C";
                oArg.arg_paramCols = "VALIDSTATE|ENTERPRISEID";
                oArg.arg_paramValues = "Valid|"+this.enterpriseid;
                oArg.arg_rtnCols = "INSPECTIONMETHODID|INSPECTIONMETHODNAME";
            }
            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;

            if (sPopupId == "GRD_INSPMETHOD")    /*그리드-검사방법*/
            {
                /*팝업 클릭한 row에 setting 정보를 가져와서 멀티 선택시 다른 row에도 일괄 반영*/
                var inspectionClassMat = this.ds_inspClassMatList.getColumn(this.ds_inspClassMatList.rowposition, "INSPECTIONCLASSMAT");
                var inspectionClassId = this.g_searchInspectionClassId + "." + inspectionClassMat;

                for(var i=0; i<rtn.length; i++){
                    var colArray = rtn[i];

                    if (i==0)
                    {
                        addRow = this.ds_inspDefinitionList.rowposition;
                    }
                    else
                    {
                        addRow = this.ds_inspDefinitionList.addRow();
                    }

                    this.ds_inspDefinitionList.setColumn(addRow, "ENTERPRISEID", this.enterpriseid);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONMETHODID", colArray[0]);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONDEFNAME", colArray[1]);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONCLASSID", inspectionClassId);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONDEFID", inspectionClassMat + "-" + colArray[0]);
                    this.ds_inspDefinitionList.setColumn(addRow, "VALIDSTATE", "Valid");
                }
            }
        };
         /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 트리 조회
         */
        this.fn_searchImportInspTreeList = function ()
        {
            this.ds_importInspectionTreeList.clearData();
            this.ds_inspClassMatList.clearData();

            var sSvcID        = "selectImportInspTreeList";
            var sController   = "/bas04300/selectImportInspTreeList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_importInspectionTreeList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", this.g_parentSrch.cbo_validstate.value);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.g_inspectionClassId);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 자재분류 리스트 조회
         */
        this.fn_searchInspClassMatList = function()
        {
            this.ds_inspClassMatList.clearData();

            var sSvcID        = "selectInspClassMatList";
            var sController   = "/bas04300/selectInspClassMatList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspClassMatList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", this.g_parentSrch.cbo_validstate.value);
                sArgs        += this.gfn_setParam("PARENTINSPECTIONCLASSID", this.g_searchInspectionClassId);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.g_inspectionClassId);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사 방법 리스트 조회
         */
        this.fn_searchInspDefinitionList = function(pRow)
        {
            this.ds_inspDefinitionList.clearData();
            this.ds_inspMethodItemList.clearData();

            var inspectionClassId = this.g_searchInspectionClassId+"."+ this.ds_inspClassMatList.getColumn(pRow, "INSPECTIONCLASSMAT");

            var sSvcID        = "selectInspDefinitionList";
            var sController   = "/bas04300/selectInspDefinitionList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspDefinitionList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", this.g_parentSrch.cbo_validstate.value);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", inspectionClassId);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사 항목 리스트 조회
         */
        this.fn_searchInspMethodItemList = function(pRow)
        {
            this.ds_inspMethodItemList.clearData();

            var sSvcID        = "selectInspMethodItemList";
            var sController   = "/bas04300/selectInspMethodItemList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspMethodItemList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", this.g_parentSrch.cbo_validstate.value);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.g_searchInspectionClassId);
                sArgs        += this.gfn_setParam("INSPECTIONMETHODID", this.ds_inspDefinitionList.getColumn(pRow, "INSPECTIONMETHODID"));
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 저장
         */
        this.fn_saveImportInsp = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_inspClassMatList) && !this.gfn_dsIsUpdated(this.ds_inspDefinitionList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사항목 그리드 필수값 체크
            var component = this.grd_inspClassMatList;
            var strColIdList = "VALIDSTATE";
            if (!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

            var component = this.grd_inspDefinitionList;
            var strColIdList = "INSPECTIONDEFNAME,VALIDSTATE";
            if (!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

            this.g_positionA = this.ds_inspClassMatList.getColumn(this.ds_inspClassMatList.rowposition, "INSPECTIONCLASSMAT");
            this.g_positionB = this.ds_inspDefinitionList.getColumn(this.ds_inspDefinitionList.rowposition, "INSPECTIONMETHODID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveImportInsp";
            var sController   = "/bas04300/saveImportInsp.do";
            var sInDatasets   = "INPUT1=ds_inspClassMatList:U INPUT2=ds_inspDefinitionList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 자재분류리스트 추가
         */
        this.fn_addInspClassMatList = function(obj,e)
        {
            var objDataset = this.ds_inspClassMatList;
            if (objDataset == null) return;
            var row = objDataset.addRow();
        };

        /*
         * 기능 : 검사 방법 리스트 추가
         */
        this.fn_addInspDefinitionList = function(obj,e)
        {
            var objDataset = this.ds_inspDefinitionList;
            if (objDataset == null) return;

            if (this.ds_inspClassMatList.rowcount < 0)
            {
                this.gfn_Message("NotSelectResult", this.nfn_getDictionarynameUpper("INSPECTIONCLASSMATLIST"), "warning", "ok");
                return false;
            }

            var row = objDataset.addRow();
        };

        /*
         * 기능 : 검사 방법 리스트 '삭제' 버튼 클릭 시
         */
        this.fn_deleteInspDefinitionList = function(obj,e)
        {
            var idx = this.ds_inspDefinitionList.rowposition;
            if (this.ds_inspDefinitionList.getRowType(idx) == "2")
            {
                this.ds_inspDefinitionList.deleteRow(idx);
            }
        };

        /*
         * 기능 : 트리 검색
         */
        this.fn_searchFilterTree = function(obj,e)
        {
            var searchKey = this.div_treeSearch.form.edt_treeItemName.value;
            this.ds_importInspectionTreeList.filter("");
            this.ds_importInspectionTreeList.filter("INSPECTIONCLASSNAME.indexOf('"+searchKey+"') >= 0");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 이벤트 : 자재분류 리스트 클릭시 검사방법 조회
         */
        this.ds_inspClassMatList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

        	var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspClassMatList)
               || this.gfn_dsIsUpdated(this.ds_inspDefinitionList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk)
            {
                this.fn_searchInspDefinitionList(e.newrow);
            }
            else
            {
                return false;
            }
        };

         /*
         * 이벤트 : 검사방법 클릭시 검사항목 조회
         */
        this.ds_inspDefinitionList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

        	this.fn_searchInspMethodItemList(e.newrow);
        };

        /*
         * 이벤트 : 검사 방법 리스트 '검사 방법 명' 버튼 클릭 시
         */
        this.grd_inspDefinitionList_onexpandup = function(obj,e)
        {
            this.fn_openPop("GRD_INSPMETHOD","P00143");
        };

        /*
         * 이벤트 : 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.
         */
        this.BAS04300D3_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };

        /*
         * 이벤트 : 트리 검색 단어 입력 후 Enter시 검색
         */
        this.div_treeSearch_edt_treeItemName_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_searchFilterTree();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onclose",this.BAS04300D3_onclose,this);
            this.div_treeSearch.form.edt_treeItemName.addEventHandler("onkeydown",this.div_treeSearch_edt_treeItemName_onkeydown,this);
            this.div_treeSearch.form.btn_treeItemName.addEventHandler("onclick",this.fn_searchFilterTree,this);
            this.grd_inspDefinitionList.addEventHandler("onexpandup",this.grd_inspDefinitionList_onexpandup,this);
            this.btn_delRowInspDefinitionList.addEventHandler("onclick",this.fn_deleteInspDefinitionList,this);
            this.btn_addRowInspDefinitionList.addEventHandler("onclick",this.fn_addInspDefinitionList,this);
            this.ds_inspClassMatList.addEventHandler("canrowposchange",this.ds_inspClassMatList_canrowposchange,this);
            this.ds_inspDefinitionList.addEventHandler("canrowposchange",this.ds_inspDefinitionList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS04300D3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
