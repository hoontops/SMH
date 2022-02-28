(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02100P1");
            this.set_titletext("Routing 복사");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,203);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_copy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID_FR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMREV_FR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMREV_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"70","28","btnCancel:5","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("복사");
            obj.set_cssclass("btn_pop_yes");
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

            obj = new Static("Static02_01","676","121","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","400",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","Static02:0",null,"31","45",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Routing 복사");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","sta_title:0",null,"70","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemIdFr","0.00%","10","15.04%","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("EXISTINGPRODUCTDEFID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnItemFr",null,"10","22","20","417",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemFr","119","10",null,"20","btnItemFr:0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_text("10400009A1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemFr_cd",null,"10","39","20","378",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemNmFr","50.66%","10","15.04%","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("EXISTINGPRODUCTDEFNAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemFr_nm","509","10",null,"20","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemIdTo","0.00%","34","15.04%","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("TRANSPRODUCTDEFID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemTo_cd",null,"34","39","20","378",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemTo","119","34",null,"20","edtItemTo_cd:0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("point");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("10400009A1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItemNmTo","50.66%","34","15.04%","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TRANSPRODUCTDEFNAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemTo_nm","509","34",null,"20","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,203,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtItemFr","value","ds_copy","ITEMID_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtItemFr_cd","value","ds_copy","ITEMREV_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtItemFr_nm","value","ds_copy","ITEMNM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtItemTo","value","ds_copy","ITEMID_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtItemTo_cd","value","ds_copy","ITEMREV_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtItemTo_nm","value","ds_copy","ITEMNM_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02100P1.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02100P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Routing 복사
         * 파일명 		: BAS02100P1.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.3.11
         *
         * 설  명		: Routing 복사 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.11	sungmin.choe   	최초작성
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
        	this.searchDiv.edtItemTo.set_value(this.parent.itemId);
        	this.searchDiv.edtItemTo_nm.set_value(this.parent.itemNm);
        	this.searchDiv.edtItemTo_cd.set_value(this.parent.itemRev);
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
        	} else {
        		switch(trId) {
        			case "copyRouting":
        			{
        				this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        				this.close();
        				this.opener.fn_searchTreeList();
        				break;
        			}
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
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	if(svcId == "ITEM_FR")
        	{
        		oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.divSearch.form.edtItemFr.value, "");
        	} else if(svcId == "ITEM_TO"){
        		oArg.arg_searchStr = "";
        	}

        	oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "ITEM_FR")
        	{
        		this.searchDiv.edtItemFr.set_value(rtn[0]);
        		this.searchDiv.edtItemFr_nm.set_value(rtn[1]);
        		this.searchDiv.edtItemFr_cd.set_value(rtn[2]);
        	}
        	if(sPopupId == "ITEM_TO")
        	{
        		this.searchDiv.edtItemTo.set_value(rtn[0]);
        		this.searchDiv.edtItemTo_nm.set_value(rtn[1]);
        		this.searchDiv.edtItemTo_cd.set_value(rtn[2]);
        	}
        }
        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_copy = function()
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "copyBasItemMaster";
        	var sController 	= "/bas01800/copyBasItemMaster.do";
        	var sInDatasets 	= "INPUT=ds_copy:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
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
        	var component = this.divSearch;
        	var strColIdList = "edtItemFr,edtItemTo";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("EXISTINGPRODUCTDEFID"),"품목(기존)")
        					+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("TRANSPRODUCTDEFID"),"품목(변경)");
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;
        	var dsObj = this.ds_copy;

        	//동일한 제품은 복사불가능
        	if( (dsObj.getColumn(0,"ITEMID_FR") == dsObj.getColumn(0,"ITEMID_TO"))
        	&&  (dsObj.getColumn(0,"ITEMREV_FR") == dsObj.getColumn(0,"ITEMREV_TO"))){
        		this.gfn_Message("NotSameProductDefinition", "", "warning", "ok");
        		return;
        	}

        	if(!this.gfn_Message("OspDoProcessWant", this.nfn_nvl(this.nfn_getDictionarynameUpper("ROUTINGCOPY"),"Routing 복사"), "conf", "yesno")) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "copyRouting";
        	var sController 	= "/bas02100/copyRouting.do";
        	var sInDatasets 	= "INPUT=ds_copy:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        this.div_work_Div01_btnItem_onclick = function(obj,e)
        {
        	this.fn_openPop("ITEM_FR","P00043"); //품목 조회
        };
        this.divSearch_edtItemFr_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.fn_openPop("ITEM_FR","P00043"); //품목 조회
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divSearch.form.btnItemFr.addEventHandler("onclick",this.div_work_Div01_btnItem_onclick,this);
            this.divSearch.form.edtItemFr.addEventHandler("onkeydown",this.divSearch_edtItemFr_onkeydown,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("BAS02100P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
