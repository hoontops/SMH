(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02100P4");
            this.set_titletext("대체품목");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
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
            obj._setContents("<ColumnInfo><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESITEMTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MAKER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","87",null,"34","713",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자재 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELECTCONSUMABLE");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","122",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site ID\"/><Cell col=\"1\" text=\"자재유형\" tooltiptext=\"MATERIALTYPE\"/><Cell col=\"2\" text=\"자재코드\" tooltiptext=\"COMPONENTITEMID\"/><Cell col=\"3\" text=\"자재 Rev\" tooltiptext=\"COMPONENTITEMVERSION\"/><Cell col=\"4\" text=\"자재명\" tooltiptext=\"COMPONENTITEMNAME\"/><Cell col=\"5\" text=\"규격\" tooltiptext=\"SPECDEFINITION\"/><Cell col=\"6\" text=\"UOM\" tooltiptext=\"COMPONENTUOM\"/><Cell col=\"7\" text=\"제조사\" tooltiptext=\"MEASURINGMANUFACTURER\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\"/><Cell col=\"1\" text=\"bind:MASTERDATACLASSID\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:ITEMID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEMVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ITEMNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SPEC\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:UOMDEFID\" displaytype=\"combotext\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" text=\"bind:MAKER\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"70","28","btnCancel:5","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","87","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","72","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"61","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","Static01:0","87",null,"34","607",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"67","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("label00","20","10","140","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("품목유형코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PARENTCATEGORYID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("label01","339","10","140","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("반제품/자재코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SEMIPRODUCTCONSUMABLE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","label01:5","10","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"-25",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","47","24","39",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_masterdataclass","label00:5","10","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("제품");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("label01_00","339","35","140","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("반제품/자재코드명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SEMIPRODUCTCONSUMABLENAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","label01_00:5","35","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("label01_00_00","20","35","140","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("반제품/자재코드 Rev.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SEMIPRODUCTCONSUMABLEREV");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_itemRev","label01_00_00:5","35","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02100P4.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02100P4.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재 선택
         * 파일명 		: BAS02100P4.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.4.01
         *
         * 설  명		: 자재선택 팝업
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
         var lv_rtnCols;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	lv_rtnCols = this.parent.arg_rtnCols;
        	this.nfn_formInit(obj);

        	this.basfn_setCustomQueryCmb(this.divSearch.form.cbo_masterdataclass // Object
        								, "selectMasterDataClassList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("MESITEMTYPE", "Consumable"));

        	if(!this.nfn_isNull(this.parent.arg_searchStr)){
        		this.divSearch.form.cbo_masterdataclass.set_value(this.parent.arg_searchStr);
        		this.divSearch.form.cbo_masterdataclass.set_enable(false);
        	} else {
        		this.divSearch.form.cbo_masterdataclass.set_enable(true);
        	}

        	//품목단위:UOM
        	var sSvcID 			= "selectUOM";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_uom=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectUOMList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_list.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "MASTERDATACLASSID", this.divSearch.form.cbo_masterdataclass.value);
        	this.ds_search.setColumn(0, "ITEMID", this.divSearch.form.edt_itemId.value);
        	this.ds_search.setColumn(0, "ITEMVERSION", this.divSearch.form.edt_itemRev.value);
        	this.ds_search.setColumn(0, "ITEMNAME", this.divSearch.form.edt_itemName.value);
        	this.ds_search.setColumn(0, "MESITEMTYPE", "Consumable");

        	this.ds_search.setColumn(0, "SQL_ID", "selectItemList");

        	var sSvcID 			= "selectMasterDataClassList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_list=output";
        	var sArgs 		  	= "";
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
        	this.opener.fv_rtnValue = null;
        	this.close();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = null;
        	this.close();
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fn_selectData();
        };


        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.fn_selectData = function()
        {
        	var rtnArray = new Array();
        	var index = 0;
        	if (this.ds_list.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	for(var j=0; j<this.ds_list.rowcount; j++){
        		if(this.ds_list.getColumn(j,"CHK")!="1") continue;
        		var colArray = new Array();
        		var colIdList = lv_rtnCols.split("|");
        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_list.getColumn(j, colIdList[i]);
        		}
        		this.opener.fv_rtnValue = colArray;
        	}

        	this.close();
        }

        this.grd_result_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.ds_list.setColumn(e.row,"CHK","1");
        	this.fn_selectData();
        	return;
        };

        this.divSearch_btnReset_onclick = function(obj,e)
        {
        	this.divSearch.form.cbo_masterdataclass.set_value(null);
        	this.divSearch.form.edt_itemId.set_value("");
        	this.divSearch.form.edt_itemRev.set_value("");
        	this.divSearch.form.edt_itemName.set_value("");
        };

        this.Edit_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.fn_search();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divSearch.form.edt_itemId.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnReset.addEventHandler("onclick",this.divSearch_btnReset_onclick,this);
            this.divSearch.form.edt_itemName.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divSearch.form.edt_itemRev.addEventHandler("onkeydown",this.Edit_onkeydown,this);
        };
        this.loadIncludeScript("BAS02100P4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
