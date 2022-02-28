(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01800P");
            this.set_titletext("판매범주 조회");
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
            obj._setContents("<ColumnInfo><Column id=\"PARENTCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","62",null,"34","713",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("판매범주");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SALEORDERCATEGORY");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"카테고리ID\"/><Cell col=\"2\" text=\"카테고리명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CATEGORYID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CATEGORYNAME\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Static("Static02_01","236","62","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
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

            obj = new Static("sta_cnt_ds_list","Static01:0","62",null,"34","607",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("label00","20","10","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("카테고리분류");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("PARENTCATEGORYID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("label01","339","10","90","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("카테고리명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CATEGORYNAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCategoryNm","label01:5","10","200","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","47","24","39",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCategoryType","label00:5","10","170","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("제품");
            obj.set_value("");
            obj.set_index("0");
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
        this.addIncludeScript("BAS01800P.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01800P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 판매범주 조회
         * 파일명 		: BAS01800P.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.2.17
         *
         * 설  명		: 판매범주 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.17	sungmin.choe   	최초작성
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
        	this.basfn_setCustomQueryCmb(this.divSearch.form.cboCategoryType // Object
        								, "selectCategoryMidList,,Y,A" // OPTION
        								, this.gfn_setParam("TOPPARENTCATEGORYID", "Sales"));
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.divSearch;
        	var strColIdList = "cboCategoryType";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PARENTCATEGORYID"),"카테고리분류");
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_list.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PARENTCATEGORYID", this.divSearch.form.cboCategoryType.value);
        	this.ds_search.setColumn(0, "CATEGORYNAME", this.divSearch.form.edtCategoryNm.value);
        	this.ds_search.setColumn(0, "SQL_ID", "selectCategoryList");

        	var sSvcID 			= "selectCategoryList";
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
        		switch(trId) {
        			case "selectDurablePopupList":
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
        	if (this.ds_list.rowposition < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	this.fn_selectData(this.ds_list.rowposition);
        };


        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.fn_selectData = function(rowPosition)
        {
        	var rtnArray = new Array();
        	for (var i = 1; i <= this.grd_result.getCellCount("Body"); i++)
        	{
        		var temp = this.grd_result.getCellProperty("Body", i, "text");
        		if(!this.gfn_isNull(temp)){
        			var colId = temp.replace("bind:", "");
        			rtnArray[i - 1] = this.ds_list.getColumn(this.ds_list.rowposition, colId);
        		}
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        this.grd_result_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.fn_selectData(e.row);
        };

        this.divSearch_btnReset_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnReset.addEventHandler("onclick",this.divSearch_btnReset_onclick,this);
        };
        this.loadIncludeScript("BAS01800P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
