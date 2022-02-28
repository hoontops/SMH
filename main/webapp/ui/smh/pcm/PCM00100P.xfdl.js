(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02900P");
            this.set_titletext("수주배분팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,201);
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
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DURABLECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DURABLECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_detail","20","51",null,"92","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("StaticProductCode","0","10","80","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("수주번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SALSEORDERNO");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticProductDefVersion","232","10","68","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"10","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_salesOrderId","StaticProductCode:10","10",null,"20","StaticProductDefVersion:0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticProductName","55.41%","10","75","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_label");
            obj.set_text("품목코드");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticDurableID","0","35","80","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticDurableName","55.41%","35","75","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERNAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_productDefName","StaticDurableID:10","35",null,"20","StaticDurableName:0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_lineNo","StaticProductDefVersion:10","10",null,"20","StaticProductName:0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","StaticProductName:10","10",null,"20","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_customerName","StaticDurableName:10","35",null,"20","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip03_00","0","55",null,"5","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","0","60","80","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("미배분 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RESIDUALQTY");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_residualQty","StaticDurableID00:10","60",null,"20","529",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticSplitQty","msk_residualQty:10","60","68","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("분할 수량");
            obj.set_cssclass("sta_WF_label");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_lineQty","505","60","253","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("StaticDurableName00","420","60",null,"20","msk_lineQty:10",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("라인 수");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINECOUNT");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_splitQty","StaticSplitQty:3","60","108","20",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"153","70","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("Toolbar_Cancel2");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"153","70","28","btnCancel:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("OK");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","34.50%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수주배분");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("ALLOCATESALESORDERLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,201,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_salesOrderId","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_lineNo","value","ds_search","ITEMVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.edt_productDefId","value","ds_search","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.edt_productDefName","value","ds_search","DURABLEDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.edt_customerName","value","ds_search","DURABLEDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM00100P.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 수주배분 팝업
         * 파일명 		: PCM00100P.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.2.16
         *
         * 설  명		: 치공구 조회 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.16	방성혁   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var salesOrderId   = "";
        var lineNo         = "";
        var productDefId   = "";
        var productDefName = "";
        var customerName   = "";
        var residualQty    = "";

         //응답결과
        this.resultInfo = {
        		  resultCd :	"FAIL"	//결과코드
        		, splitQty : 0
        		, lineQty : 0
        };
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	salesOrderId   = this.parent.salesOrderId;
        	lineNo         = this.parent.lineNo;
        	productDefId   = this.parent.productDefId;
        	productDefName = this.parent.productDefName;
        	customerName   = this.parent.customerName;
        	residualQty    = this.parent.residualQty;

        	this.div_detail.form.edt_salesOrderId.set_value(salesOrderId);
        	this.div_detail.form.edt_lineNo.set_value(lineNo);
        	this.div_detail.form.edt_productDefId.set_value(productDefId);
        	this.div_detail.form.edt_productDefName.set_value(productDefName);
        	this.div_detail.form.edt_customerName.set_value(customerName);
        	this.div_detail.form.msk_residualQty.set_value(residualQty);
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

        this.btnConfirm_onclick = function(obj,e)
        {
            this.resultInfo.resultCd = "OK";
        	this.resultInfo.splitQty = this.div_detail.form.msk_splitQty.value;
        	this.resultInfo.lineQty  = this.div_detail.form.msk_lineQty.value;
        	var retData = JSON.stringify(this.resultInfo);
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };

        this.div_detail_msk_splitQty_onkeyup = function(obj,e)
        {

        	var vLineQty =  Math.ceil(this.div_detail.form.msk_residualQty.value/ this.div_detail.form.msk_splitQty.value);
        	this.div_detail.form.msk_lineQty.set_value(vLineQty);
        //	this.div_detail.form.msk_lineQty.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_detail.form.msk_splitQty.addEventHandler("onkeyup",this.div_detail_msk_splitQty_onkeyup,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_temp.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
