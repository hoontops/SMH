(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02100P3");
            this.set_titletext("치공구 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
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
            obj = new Div("div_search","20","51",null,"67","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("StaticProductCode","0","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticProductDefVersion","30.61%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("txtProductCode","StaticProductCode:10","10",null,"20","StaticProductDefVersion:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","39","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"24","24","10","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18",null,"86","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticProductName","61.21%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_label");
            obj.set_text("품목명");
            obj.set_tooltiptext("ITEMNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID","0","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("치공구 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFID");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableName","30.61%","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("치공구 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("txtDurableID","85","35",null,"20","StaticDurableName:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("txtProductDefVersion","StaticProductDefVersion:10","10",null,"20","StaticProductName:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("txtProductName","StaticProductName:10","10",null,"20","Static12_00_00_00:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableClass","61.21%","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLECLASSTYPE");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("txtDurableName","StaticDurableName:10","35",null,"20","StaticDurableClass:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboDurableClass","StaticDurableClass:10","35",null,"20","Static12_00_00_00:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,DurableClass,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("true");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","118",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("치공구 목록  <fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","20","152",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_List");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"42\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"194\"/><Column size=\"105\"/><Column size=\"199\"/><Column size=\"126\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"치공구ID\"/><Cell col=\"6\" text=\"치공구명\"/><Cell col=\"7\" text=\"치공구 구분\" tooltiptext=\"DURABLECLASS\"/><Cell col=\"8\" text=\"치공구 종류\" tooltiptext=\"DURABLETYPE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DURABLEDEFID\"/><Cell col=\"6\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DURABLECLASSNAME\"/><Cell col=\"8\" text=\"bind:DURABLETYPENAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"70","28","btnCancel:5","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","118","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","103","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"92","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","34.50%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("치공구 조회");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.txtProductCode","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.txtProductDefVersion","value","ds_search","ITEMVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.txtProductName","value","ds_search","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.txtDurableID","value","ds_search","DURABLEDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.txtDurableName","value","ds_search","DURABLEDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cboDurableClass","value","ds_search","DURABLECLASSID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02100P3.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02100P3.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 조회
         * 파일명 		: BAS02100P3.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.04.01
         *
         * 설  명		: 치공구 조회 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.01	sungmin.choe   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         var toolCode;
         var toolName;
         var durableClass;
         var ProdDefID;
         var ProdDefID;
         var ProdDefVer;
         var ProdDefName;
         var plantID;
         var operationID;

         //응답결과
        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        };

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.set_rowposition(0);

        	this.ds_search.setColumn(0,"DURABLEDEFID", this.parent.toolCode);
        	this.ds_search.setColumn(0,"DURABLEDEFNAME", this.parent.toolName);
        	this.ds_search.setColumn(0,"DURABLECLASSID", this.parent.durableClass);
        	this.ds_search.setColumn(0,"ITEMID", this.parent.ProdDefID);
        	this.ds_search.setColumn(0,"ITEMVERSION", this.parent.ProdDefVer);
        	this.ds_search.setColumn(0,"ITEMNAME", this.parent.ProdDefName);
        	plantID = this.parent.plantID;
        	operationID = this.parent.operationID;
        	this.ds_result = this.parent.ds_result;

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", plantID);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(0, "OPERATIONID", operationID);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_result.clearData();

        	var sSvcID 			= "selectDurableListPop";
        	var sController 	= "/bas02100/selectDurableListPop.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_List=output";
        	var sArgs 			= "";
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

        		if(trId.indexOf("DurableClass") > -1) //유형 콤보 값 들어오면...
        		{
        			if(this.gfn_isNull(this.durableClass) == false)
        				this.div_search.form.cboDurableClass.set_value(this.durableClass);
        			else this.div_search.form.cboDurableClass.set_value(null);
        				return;
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
        	if(this.ds_List.getCaseCount("CHK == 1") <=0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

        	this.resultInfo.resultCd = "OK";
        	var retData = JSON.stringify(this.resultInfo);
        	this.ds_List.filter("CHK == 1");
        	this.ds_result.copyData(this.ds_List, true);

        	this.opener.fv_rtnValue = retData;
        	this.close();
        };


        this.Edit_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.txtProductCode.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.txtDurableID.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_search.form.txtProductDefVersion.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_search.form.txtProductName.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_search.form.txtDurableName.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_search.form.cboDurableClass.addEventHandler("onitemchanged",this.div_search_cbo_srh_onitemchanged,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_temp.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS02100P3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
