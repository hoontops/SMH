(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D1");
            this.set_titletext("약품 검사, 규격측정(계측값), 수질검사");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("약품검사");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspDefinitionList","182","66","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","66",null,"34","sta_cnt_ds_inspDefinitionList:17",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPITEMCLASSLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspMethodItemList","65.76%","66","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title2","44.99%","66",null,"34","sta_cnt_ds_inspMethodItemList:17",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPITEMLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspDefinitionList",null,"72","29","24","sta_title2:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowInspDefinitionList",null,"72","26","24","btn_xlDn_grd_inspDefinitionList:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspDefinitionList",null,"72","26","24","btn_delRowInspDefinitionList:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowInspMethodItemList",null,"72","26","24","29",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspMethodItemList",null,"72","26","24","55",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspMethodItemList",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_inspMethodItemList","45%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_inspMethodItemList");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" cssclass=\"cell_point\" tooltiptext=\"INSPITEMNAME\" textareainputmode=\"lower\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"검사 항목 유형\" cssclass=\"cell_point\" tooltiptext=\"INSPITEMTYPE\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"4\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"5\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"6\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"7\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:INSPITEMTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,InspItemType,,Y,Y\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_inspDefinitionList","0","100",null,null,"grd_inspMethodItemList:10","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_inspDefinitionList");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONMETHODNAME\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"3\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"4\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"5\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"6\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONDEFNAME\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"3\" text=\"bind:CREATOR\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
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
        this.registerScript("BAS04300D1.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 검사정의별 유형관리(기준관리 - 품질기준정보)
         * 파일명         : bas04300M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.16
         *
         * 설  명         : 검사종류가 약품 검사, 규격측정(계측값), 수질검사 일 경우 정보 등록/수정
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.16   yanghee.kim   최초작성
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
        this.g_positionA; //저장 후 위치고정을 위한 전역변수(검사방법)
        this.g_positionB; //저장 후 위치고정을 위한 전역변수(검사항목)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function(obj,e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
            //this.div_subTitle.form.edt_insepctionclassname.set_value(this.g_parentSrch.cbo_insepctionclassname.text);
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
                if (trId == "selectInspDefinitionList")
                {
                    if (this.ds_inspDefinitionList.rowcount > 0)
                    {
                        this.ds_inspDefinitionList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionA))
                        {
                            this.parent.parent.fn_findRowSetPosition(this.ds_inspDefinitionList, "INSPECTIONMETHODID", "g_positionA");
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
                else if (trId == "selectInspMethodItemList")
                {
                    if (this.ds_inspMethodItemList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionB))
                        {
                            this.parent.parent.fn_findRowSetPosition(this.ds_inspMethodItemList, "INSPITEMID", "g_positionB");
                        }
                    }
                }
                else if (trId == "saveInspDefinition")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchInspDefinitionList();
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
            else if (popupId == "GRD_INSPMETHODITEM")    /*그리드-검사항목*/
            {
                oArg.arg_type = "C";
                oArg.arg_paramCols = "VALIDSTATE";
                oArg.arg_paramValues = "Valid";
                oArg.arg_rtnCols = "INSPITEMID|INSPITEMVERSION|INSPITEMNAME";
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
                var inspectionClassId = this.g_parentSrch.cbo_insepctionclassname.value;

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

                    var inspectionDefId = inspectionClassId + "-" + colArray[0];

                    this.ds_inspDefinitionList.setColumn(addRow, "ENTERPRISEID", this.enterpriseid);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONMETHODID", colArray[0]);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONDEFNAME", colArray[1]);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONCLASSID", inspectionClassId);
                    this.ds_inspDefinitionList.setColumn(addRow, "INSPECTIONDEFID", inspectionDefId);
                    this.ds_inspDefinitionList.setColumn(addRow, "VALIDSTATE", "Valid");
                }
            }
            else if (sPopupId == "GRD_INSPMETHODITEM")    /*그리드-검사항목*/
            {
                /*팝업 클릭한 row에 setting 정보를 가져와서 멀티 선택시 다른 row에도 일괄 반영*/
                var inspectionClassID = this.ds_inspDefinitionList.getColumn(this.ds_inspDefinitionList.rowposition, "INSPECTIONCLASSID");
                var inspectionMethodID = this.ds_inspDefinitionList.getColumn(this.ds_inspDefinitionList.rowposition, "INSPECTIONMETHODID");
                var inspectionMethodName = this.ds_inspDefinitionList.getColumn(this.ds_inspDefinitionList.rowposition, "IINSPECTIONMETHODNAME");

                for(var i=0; i<rtn.length; i++){
                    var colArray = rtn[i];

                    if (i==0)
                    {
                        addRow = this.ds_inspMethodItemList.rowposition;
                    }
                    else
                    {
                        addRow = this.ds_inspMethodItemList.addRow();
                    }

                    this.ds_inspMethodItemList.setColumn(addRow, "ENTERPRISEID", this.enterpriseid);
                    this.ds_inspMethodItemList.setColumn(addRow, "INSPITEMID", colArray[0]);
                    this.ds_inspMethodItemList.setColumn(addRow, "INSPITEMVERSION", colArray[1]);
                    this.ds_inspMethodItemList.setColumn(addRow, "INSPITEMNAME", colArray[2]);
                    this.ds_inspMethodItemList.setColumn(addRow, "INSPECTIONCLASSID", inspectionClassID);
                    this.ds_inspMethodItemList.setColumn(addRow, "INSPECTIONMETHODID", inspectionMethodID);
                    this.ds_inspMethodItemList.setColumn(addRow, "IINSPECTIONMETHODNAME", inspectionMethodName);
                    this.ds_inspMethodItemList.setColumn(addRow, "VALIDSTATE", "Valid");
                }
            }
        };
         /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 검사 방법 리스트 조회
         */
        this.fn_searchInspDefinitionList = function ()
        {

            this.ds_inspDefinitionList.clearData();
            this.ds_inspMethodItemList.clearData();

            var sSvcID        = "selectInspDefinitionList";
            var sController   = "/bas04300/selectInspDefinitionList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspDefinitionList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", this.g_parentSrch.cbo_validstate.value);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.g_parentSrch.cbo_insepctionclassname.value);
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
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.ds_inspDefinitionList.getColumn(pRow, "INSPECTIONCLASSID"));
                sArgs        += this.gfn_setParam("INSPECTIONMETHODID", this.ds_inspDefinitionList.getColumn(pRow, "INSPECTIONMETHODID"));
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사 방법 리스트, 검사 항목 리스트 저장
         */
        this.fn_saveInspDefinition = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_inspDefinitionList) && !this.gfn_dsIsUpdated(this.ds_inspMethodItemList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사항목 그리드 필수값 체크
            var component = this.grd_inspDefinitionList;
            var strColIdList = "INSPECTIONDEFNAME,VALIDSTATE";
            if (!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

            var component = this.grd_inspMethodItemList;
            var strColIdList = "INSPITEMNAME,INSPITEMTYPE,VALIDSTATE";
            if (!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

            this.g_positionA = this.ds_inspDefinitionList.getColumn(this.ds_inspDefinitionList.rowposition, "INSPECTIONMETHODID");
            this.g_positionB = this.ds_inspMethodItemList.getColumn(this.ds_inspMethodItemList.rowposition, "INSPITEMID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspDefinition";
            var sController   = "/bas04300/saveInspDefinition.do";
            var sInDatasets   = "INPUT1=ds_inspDefinitionList:U INPUT2=ds_inspMethodItemList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사 방법 리스트 추가
         */
        this.fn_addInspDefinitionList = function(obj,e)
        {
            var objDataset = this.ds_inspDefinitionList;
            if (objDataset == null) return;

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
         * 기능 : 검사 항목 리스트 추가
         */
        this.fn_addInspMethodItemList = function(obj,e)
        {
            var objDataset = this.ds_inspMethodItemList;
            if (objDataset == null) return;

            if (this.ds_inspDefinitionList.rowcount < 0)
            {
                this.gfn_Message("NotSelectResult", this.nfn_getDictionarynameUpper("INSPITEMCLASSLIST"), "warning", "ok");
                return false;
            }

            var row = objDataset.addRow();
        };

        /*
         * 기능 : 검사 항목 리스트 '삭제' 버튼 클릭 시
         */
        this.fn_deleteInspMethodItemList = function(obj,e)
        {
            var idx = this.ds_inspMethodItemList.rowposition;
            if (this.ds_inspMethodItemList.getRowType(idx) == "2")
            {
                this.ds_inspMethodItemList.deleteRow(idx);
            }
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 이벤트 : 검사 방법 리스트 선택시 검사 항목 리스트 조회
         */
        this.ds_inspDefinitionList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspMethodItemList))
            {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk)
            {
                this.fn_searchInspMethodItemList(e.newrow);
            }
            else
            {
                return false;
            }
        };

        /*
         * 이벤트 : 검사 방법 리스트 '검사 방법 명' 버튼 클릭 시
         */
        this.grd_inspDefinitionList_onexpandup = function(obj,e)
        {
            this.fn_openPop("GRD_INSPMETHOD","P00143");
        };

        /*
         * 이벤트 : 검사 항목 리스트 '검사항목명' 버튼 클릭 시
         */
        this.grd_inspMethodItemList_onexpandup = function(obj,e)
        {
            this.fn_openPop("GRD_INSPMETHODITEM","P00144");
        };

        /*
         * 이벤트 : 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.
         */
        this.BAS04300D1_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onclose",this.BAS04300D1_onclose,this);
            this.btn_delRowInspDefinitionList.addEventHandler("onclick",this.fn_deleteInspDefinitionList,this);
            this.btn_addRowInspDefinitionList.addEventHandler("onclick",this.fn_addInspDefinitionList,this);
            this.btn_delRowInspMethodItemList.addEventHandler("onclick",this.fn_deleteInspMethodItemList,this);
            this.btn_addRowInspMethodItemList.addEventHandler("onclick",this.fn_addInspMethodItemList,this);
            this.grd_inspMethodItemList.addEventHandler("onexpandup",this.grd_inspMethodItemList_onexpandup,this);
            this.grd_inspDefinitionList.addEventHandler("onexpandup",this.grd_inspDefinitionList_onexpandup,this);
            this.ds_inspDefinitionList.addEventHandler("canrowposchange",this.ds_inspDefinitionList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS04300D1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
