(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01800P2");
            this.set_titletext("반제품채번");
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
            obj._setContents("<ColumnInfo><Column id=\"LAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"P_INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPDAY01QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMIPRODUCTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","161",null,"34","713",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("반제품명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SEMIPRODUCT");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","195",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"반제품유형\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"LAYER1\"/><Cell col=\"3\" text=\"LAYER2\"/><Cell col=\"4\" text=\"수량\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:SEMIPRODUCTTYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,SemiProductType,,Y,Y\" cssclass=\"point\"/><Cell col=\"2\" text=\"bind:LAYER1\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,Layer,null,Y,Y\" combotype=\"caseifilterlike\"/><Cell col=\"3\" text=\"bind:LAYER2\" combocodecol=\"C,Layer,null,Y,Y\" edittype=\"combo\" displaytype=\"combocontrol\" combotype=\"caseifilterlike\"/><Cell col=\"4\" edittype=\"mask\" text=\"bind:OSPDAY01QTY\" editinputtype=\"number\" displaytype=\"maskeditcontrol\" cssclass=\"point\"/></Band></Format></Formats>");
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

            obj = new Static("Static02","66","50","50","20",null,null,null,null,null,null,this);
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

            obj = new Static("Static02_01","236","161","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","97","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"86","20","84","0",null,null,null,null,null,this);
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

            obj = new Static("sta_cnt_ds_list","Static01:0","161",null,"34","607",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","70",null,"91","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemRev",null,"10","250","20","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemRev","389","10",null,"20","edtItemRev:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMVERSION");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemNmFr00","0.00%","60","16.49%","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("Site 유형");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SITETYPE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70","staItemNmFr00:0","48","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSiteType","130","60","189","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("제품");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemId","129","10",null,"20","379",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("point");
            obj.set_readonly("true");
            obj.set_text("10400009A1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00","66","30","50","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","130","37",null,"20","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemNmFr","0.00%","Static02_00:0",null,"20","edtItemNm:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMNAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemId","0.00%","Static02:0",null,"20","edtItemId:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","66","staItemNmFr:0","50","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSubItem","514","60",null,"20","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("공정반제품");
            obj.set_value("Y");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("AttGroupOperationItem");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_textAlign("center");
            obj.set_iconPosition("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkItem","339","60",null,"20","chkSubItem:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("상품");
            obj.set_fittocontents("none");
            obj.set_tooltiptext("8A6358A9CE3C40D4BDB392778E19FC00");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_textAlign("center");
            obj.set_iconPosition("right");
            obj.set_value("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"166","29","24","51",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"166","29","24","btn_delRow:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_result",null,"166","29","24","22",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","45",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("반제품 채번");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("Toolbar_SubProductItemCode");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtItemId","value","ds_copy","ITEMID_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtItemRev","value","ds_copy","ITEMREV_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtItemNm","value","ds_copy","ITEMNM_FR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS01800P2.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01800P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 반제품채번
         * 파일명 		: BAS01800P2.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.2.20
         *
         * 설  명		: 반제품채번
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.20	sungmin.choe   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.searchDiv = this.divSearch.form;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.searchDiv.edtItemId.set_value(this.parent.itemId);
        	this.searchDiv.edtItemNm.set_value(this.parent.itemNm);
        	this.searchDiv.edtItemRev.set_value(this.parent.itemRev);
        	this.searchDiv.chkItem.set_value("N");
        	this.searchDiv.chkSubItem.set_value("N");
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
        	/*
        	if (this.ds_list.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}*/

        	this.fn_selectData(this.ds_list.rowposition);
        };


        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.fn_saveAfter = function(rowPosition)
        {
        	this.close();
        }

        this.fn_add = function(obj,e)
        {
        	this.ds_list.addRow();
        };

        this.fn_delete = function(obj,e)
        {
        	var dsObj = this.ds_list;
        	if(dsObj.rowcount>0){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	}
        };

        //RowData 생성 함수
        this.fn_generateRowData = function(semiProudctId, rev, layer1, layer2, semiProductType, count, type)
        {
        	var productId = this.parent.itemId;
        	var customerName = "";
        	var itemType = "";
        	var number = "";
        	var layer = "";
        	var customerRev = "";
        	var tmpLayer1 = "";
        	var tmpLayer2 = "";
        	var returnVal = "";

        	if(this.gfn_isNull(productId)) return;
        	// 인터 반제품 채번룰 변경 (2020/03/12)
        	// 품목유형(1) + LAYER(2) + 일련번호(5) + 고객Rev(2) + 자재구분(2) + 사용 LAYER1(2) + 사용 LAYER2(2) + 차수(1) + 투입사이트(1)
        	// 변경 - 2020.05.26 kisu.kim   투입사이트 없음.
        	//품목유형(1) + LAYER(2) + 일련번호(5) + 고객Rev(2) + 자재구분(2) + 사용 LAYER1(2) + 사용 LAYER2(2) + 차수(1)
        	itemType = productId.substring(0, 1);
        	layer = productId.substring(1, 3);
        	number = productId.substring(3, 8);
        	customerRev = productId.substring(8, 10);


        	if (this.gfn_isNull(layer1)) {
        		tmpLayer1 = "00";
        	} else {
        		tmpLayer1 = layer1.substring(0,layer1.length-1).padLeft(2, "0");
        	}
        	if (this.gfn_isNull(layer2)){
        		tmpLayer2 = "00";
        	} else {
        		tmpLayer2 = layer2.substring(0,layer2.length-1).padLeft(2, "0");
        	}

        	if(type=="9" || type=="4"){
        		returnVal =    type+productId.substring(1,productId.length);
        	} else {
        		returnVal =     type
        					  + layer
        					  + number
        					  + customerRev
        					  + semiProductType
        					  + tmpLayer1
        					  + tmpLayer2
        					  + count;
        	}

        	return returnVal;

        }

        this.fn_selectData = function()
        {
        	var rtnArray = new Array();
        	var totalCnt = 0;
        	var dsObj = this.ds_list;
        	var itemYn = this.searchDiv.chkItem.value;
        	var subItemYn = this.searchDiv.chkSubItem.value;
        	var productId = this.parent.itemId;
        	var rev = this.parent.itemRev; //Rev

        	//상품 체크시 상품 생성
        	if(itemYn=="Y"){
        		rtnArray[totalCnt] = this.fn_generateRowData(productId, rev, "", "", "", 1,"9");
        		totalCnt++;
        	}

        	//공정반제품
        	if(subItemYn=="Y"){
        		rtnArray[totalCnt] = this.fn_generateRowData(productId, rev, "", "", "", 1,"4");
        		totalCnt++;
        	}

        	if(dsObj.rowcount>0){
        		var component = this.grd_result;
        		var strColIdList = "SEMIPRODUCTTYPE,OSPDAY01QTY";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;
        		for (var i = 0; i < dsObj.rowcount; i++) { //입력행의 갯수만큼 Loop
        			var cnt = nexacro.toNumber(this.nfn_nvl(dsObj.getColumn(i, "OSPDAY01QTY"),"0")); //입력수량
        			var layer1 = dsObj.getColumn(i, "LAYER1"); //LAYER1
        			var layer2 = dsObj.getColumn(i, "LAYER2"); //LAYER2
        			var semiProductType = dsObj.getColumn(i, "SEMIPRODUCTTYPE"); //자재구분

        			/*
        			if (dsObj.getCaseCount("SEMIPRODUCTTYPE=='"+semiProductType+"'")>1)
        			{
        				this.gfn_Message("SameTypeForSubItemCode", "", "warning", "ok");
        				return;
        			}
        			*/

        			if(cnt>9) {
        				this.gfn_Message("WrongTimeForSubItemCode", "", "warning", "ok"); //9개이상 입력불가
        				return;
        			}
        			for (var j = 0; j < cnt; j++) { //컬럼 갯수만큼 Loop
        				rtnArray[totalCnt] = this.fn_generateRowData(productId, rev, layer1, layer2, semiProductType, (j+1),"2");
        				totalCnt++;
        			}
        		}
        		this.opener.fv_rtnValue = rtnArray;
        		this.close();
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.btn_addRow.addEventHandler("onclick",this.fn_add,this);
        };
        this.loadIncludeScript("BAS01800P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
