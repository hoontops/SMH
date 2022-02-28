(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00100P");
            this.set_titletext("자재관리 자재Spec 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,252);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_materialDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALLENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALWIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERPOLICY\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONTAINHALOGEN\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSIONFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASEMAN\" type=\"STRING\" size=\"256\"/><Column id=\"BOOKPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTROUTE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTLOCATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALOUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MAKERECEIPTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNTGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECORDEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch01","20","54","1140","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","130","0","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","130",null,"50","10",null,"0",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm","0","10","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_text("자재 유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrType","130","10","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrHalogen","130","40","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00","0","40","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("5");
            obj.set_text("할로겐 함유 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02_00","130","30","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrReceiptRoute","130","70","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","130","60","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00","0","70","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("9");
            obj.set_text("입고 경로");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00_00","280","70","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("10");
            obj.set_text("입고 LOC");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrReceiptLocator","410","70","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_01","280","40","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("12");
            obj.set_text("환산 계수");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrConversionFactor","410","40","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrLength","410","10","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm01","280","10","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("15");
            obj.set_text("자재 길이");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00_00_00","560","70","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("16");
            obj.set_text("출고 방식");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrMaterialOutType","690","70","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_01_00","560","40","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("18");
            obj.set_text("기본 구매자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrPurchaseMan","690","40","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrWidth","690","10","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm01_00","560","10","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("21");
            obj.set_text("자재 폭");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00_00_00_00","840","70","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("22");
            obj.set_text("제조/입고 일자 구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrMakeReceiptType","970","70","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_01_00_00","840","40","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("24");
            obj.set_text("장부 가격");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrTxtPrice","970","40","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mrtOrderPolicy","970","10","150","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm01_00_00","840","10","130","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("27");
            obj.set_text("발주 정책");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrID","369","12","67","79",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","81","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","20","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","20","1140","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("자재 스펙");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("title1","20","156","1140","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계정 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","20","190","1140","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","73","0","50","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","73",null,"50","10",null,"0",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm","0","10","130","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("계정그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_mtrAccountGruop","130","10","150","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_mtrAccountCode","410","10","150","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00","280","10","130","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00","560","10","130","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_text("계정분류");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_mtrAccountType","690","10","150","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm00_00_00","840","10","130","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            obj.set_text("차변/대변");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_mtrRecordedType","970","10","150","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divSearch02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1180,252,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MTM00100P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MTM00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 마스터품목(자재) - 자재Spec 조회
         * 파일명 		: MTM00100P.xfdl
         * 작성자 		: 유창균
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 자재Spec 조회 PopUp
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.29	유창균   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화
        	this.nfn_formInit(obj);
        	this.fn_formInit();

        	//Main 화면에서 자재 ID 값을 받아와서 자재 스펙에 invisible 되어 있는 edt_mtrID에 set_value;
        	this.divSearch01.form.edt_mtrID.set_value(this.parent.arg_mtrID);

        	//edt_mtrID 값이 null이 아닐 경우 query;
        	if(!this.gfn_isNull(this.divSearch01.form.edt_mtrID.value))
        	{
        		this.fn_search();
        	}
        };

        this.fn_formInit = function ()
        {
        	//edt 초기화
        	this.divSearch01.form.edt_mtrLength.set_value("");
        	this.divSearch01.form.edt_mtrWidth.set_value("");
        	this.divSearch01.form.edt_mrtOrderPolicy.set_value("");
        	this.divSearch01.form.edt_mtrHalogen.set_value("");
        	this.divSearch01.form.edt_mtrConversionFactor.set_value("");
        	this.divSearch01.form.edt_mtrPurchaseMan.set_value("");
        	this.divSearch01.form.edt_mtrTxtPrice.set_value("");
        	this.divSearch01.form.edt_mtrReceiptRoute.set_value("");
        	this.divSearch01.form.edt_mtrReceiptLocator.set_value("");
        	this.divSearch01.form.edt_mtrMaterialOutType.set_value("");
        	this.divSearch01.form.edt_mtrMakeReceiptType.set_value("");
        	this.divSearch02.form.edt_mtrAccountGruop.set_value("");
        	this.divSearch02.form.edt_mtrAccountCode.set_value("");
        	this.divSearch02.form.edt_mtrAccountType.set_value("");
        	this.divSearch02.form.edt_mtrRecordedType.set_value("");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_materialDetail.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); 		//Search Condition Dataset clear
        	this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.

        	//var sRow = this.ds_search.addRow(); //spec data가 1건만 조회되기 때문에 sRow는 0;
        	//search dataset 값을 초기화하고 해당 value로 query;
        	this.ds_search.setColumn(0, "ITEMID", this.divSearch01.form.edt_mtrID.value);

        	var sSvcID 			= "selectMtmMaterialDetail";
        	var sController 	= "/mtm00100/selectMtmMaterialDetail.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_materialDetail=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		//callback(불러온 데이터??)가 selectMtmMaterialDetail 일 경우
        		case "selectMtmMaterialDetail":
        			//데이터가 0건일 경우 데이터 없음.
        			if (this.ds_materialDetail.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        			} else {
        			//0건을 넘을 경우 function;
        				this.fn_materialDetailSet();
        			}
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * 취소 버튼 클릭시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        //edt에 value를 넣어주는 function;
        this.fn_materialDetailSet = function ()
        {
        	//this.gfn_Message("HI", null, "error", "ok");
        	this.divSearch01.form.edt_mtrType.set_value(this.ds_materialDetail.getColumn(0, "MATERIALTYPE"));
        	this.divSearch01.form.edt_mtrLength.set_value(this.ds_materialDetail.getColumn(0, "MATERIALLENGTH"));
        	this.divSearch01.form.edt_mtrWidth.set_value(this.ds_materialDetail.getColumn(0, "MATERIALWIDTH"));
        	this.divSearch01.form.edt_mrtOrderPolicy.set_value(this.ds_materialDetail.getColumn(0, "ORDERPOLICY"));
        	this.divSearch01.form.edt_mtrHalogen.set_value(this.ds_materialDetail.getColumn(0, "ISCONTAINHALOGEN"));
        	this.divSearch01.form.edt_mtrConversionFactor.set_value(this.ds_materialDetail.getColumn(0, "CONVERSIONFACTOR"));
        	this.divSearch01.form.edt_mtrPurchaseMan.set_value(this.ds_materialDetail.getColumn(0, "PURCHASEMAN"));
        	this.divSearch01.form.edt_mtrTxtPrice.set_value(this.ds_materialDetail.getColumn(0, "BOOKPRICE"));
        	this.divSearch01.form.edt_mtrReceiptRoute.set_value(this.ds_materialDetail.getColumn(0, "RECEIPTROUTE"));
        	this.divSearch01.form.edt_mtrReceiptLocator.set_value(this.ds_materialDetail.getColumn(0, "RECEIPTLOCATOR"));
        	this.divSearch01.form.edt_mtrMaterialOutType.set_value(this.ds_materialDetail.getColumn(0, "MATERIALOUTTYPE"));
        	this.divSearch01.form.edt_mtrMakeReceiptType.set_value(this.ds_materialDetail.getColumn(0, "MAKERECEIPTTYPE"));
        	this.divSearch02.form.edt_mtrAccountGruop.set_value(this.ds_materialDetail.getColumn(0, "ACCOUNTGROUP"));
        	this.divSearch02.form.edt_mtrAccountCode.set_value(this.ds_materialDetail.getColumn(0, "ACCOUNTCODE"));
        	this.divSearch02.form.edt_mtrAccountType.set_value(this.ds_materialDetail.getColumn(0, "ACCOUNTTYPE"));
        	this.divSearch02.form.edt_mtrRecordedType.set_value(this.ds_materialDetail.getColumn(0, "RECORDEDTYPE"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch01.form.edt_mtrType.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrHalogen.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrReceiptRoute.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrReceiptLocator.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrConversionFactor.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrLength.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrMaterialOutType.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrPurchaseMan.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrWidth.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrMakeReceiptType.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrTxtPrice.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mrtOrderPolicy.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.edt_mtrID.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.divSearch02.form.edt_mtrAccountGruop.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch02.form.edt_mtrAccountCode.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch02.form.edt_mtrAccountType.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch02.form.edt_mtrRecordedType.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
        };
        this.loadIncludeScript("MTM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
