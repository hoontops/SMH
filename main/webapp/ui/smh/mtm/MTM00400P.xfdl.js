(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00400P");
            this.set_titletext("자재관리 자재명 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_consumableList", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTMNG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch01","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mtrGrpCode","0","10","109","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_text("자재그룹코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSUMABLECLASSID");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","40","8",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"24","24","10","58",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm","309","10","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("5");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_mtrNm","382","10","217","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("6");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("cbo_mtrGrpCode","109","10","200","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnReset00",null,null,"24","24","10","8",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","18","48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CANCEL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("APPLY");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","62","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","62","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자재 ID");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("CONSUMABLEDEFID");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_consumableList","title0:0","62","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_consumalbe","20","96",null,"336","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재그룹코드\"/><Cell col=\"2\" text=\"자재 ID\"/><Cell col=\"3\" text=\"자재버전\"/><Cell col=\"4\" text=\"자재명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLECLASSID\" textAlign=\"left\" displaytype=\"combotext\" combodisplaynulltext=\"combodisplaynulltype\" edittype=\"none\" combodataset=\"ds_selectMtmMtrGrpCodeListALL\" combodatacol=\"NAME\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MTM00400P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MTM00400P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MTM00400P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재명 조회
         * 파일명 		: MTM00400P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.08
         *
         * 설  명		: 자재 현황 조회(자재명 팝업)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.08	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.divSearch01.form;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 자재그룹코드 콤보 값 / 그리드 자재그룹코드 콤보값 설정
        	this.fn_initCombo();

        	// 검색조건의 자재명값 입력된 내용 설정
        	this.searchDiv.edt_mtrNm.set_value(this.parent.arg_mtrNm);

        	if(!this.gfn_isNull(this.searchDiv.edt_mtrNm.value))
        	{
        		this.fn_search();
        	}
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_consumableList.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); 		//Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "CONSUMABLECLASSID", this.searchDiv.cbo_mtrGrpCode.value);
        	this.ds_search.setColumn(0, "CONSUMABLEDEFNAME", this.searchDiv.edt_mtrNm.value);

        	var sSvcID 			= "selectConsumableList";
        	var sController 	= "/mtmCommon/selectConsumableList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_consumableList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	switch(trId) {

        		case "selectMtmMtrGrpCodeList":	//[조회조건] 자재그룹코드 Callback
        			break;
        		case "selectConsumableList":	//[팝업 메인 조회] Callback
        		if (this.ds_consumableList.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        			} else {
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
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : '자재그룹코드' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_mtrGrpCode 			// Object
        								, "selectMtmMtrGrpCodeList,ALL,Y,A" 	// OPTION
        								, sArgs									// 추가 파라미터
        								, "fn_callBack"); 						//콜백함수 지정
        }

        /*
         * 적용 버튼 클릭시 해당 값 담는 함수
         */
        this.fn_selectData = function(rowPosition)
        {
        	var rtnArray = new Array();
        	for (var i = 1; i <= this.grd_consumalbe.getCellCount("Body"); i++)
        	{
        		var temp = this.grd_consumalbe.getCellProperty("Body", i, "text");

        		if(!this.gfn_isNull(temp)){
        			var colId = temp.replace("bind:", "");
        			rtnArray[i - 1] = this.ds_consumableList.getColumn(this.ds_consumableList.rowposition, colId);
        		}
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 자재명 입력 후 엔터 시 조회
         */
        this.divSearch01_edt_lotNo_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

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


        /*
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열)
         */
        this.btn_apply_onclick = function(obj,e)
        {

        	if (this.ds_consumableList.getRowCount() == 0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	// 선택된 값을 담는다.
        	this.fn_selectData(this.ds_consumableList.rowposition);

        };

        /*
         * 그리드 셀 더블 클릭시
         */
        this.grd_consumalbe_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.fn_selectData(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch01.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.divSearch01.form.edt_mtrNm.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_consumalbe.addEventHandler("oncelldblclick",this.grd_consumalbe_oncelldblclick,this);
        };
        this.loadIncludeScript("MTM00400P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
