(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02100P2");
            this.set_titletext("완료창고 선택");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,310);
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
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","31",null,"34","430",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("완료창고 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELECTFINISHWAREHOUSE");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","65",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"창고 코드\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"창고명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:PLANTID\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,SemiProductType,,Y,Y\"/><Cell col=\"2\" text=\"bind:WAREHOUSEID\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"3\" text=\"bind:WAREHOUSENAME\" combocodecol=\"C,Layer,null,Y,Y\" edittype=\"none\" displaytype=\"text\" combotype=\"caseifilterlike\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","31","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","57","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"46","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","Static01:5","31",null,"34","100",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02100P2.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02100P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 완료창고 선택
         * 파일명 		: BAS02100P2.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.3.11
         *
         * 설  명		: 완료창고 선택
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
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_search();
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
        	this.ds_search.setColumn(0,"ENTERPRISEID",this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.parent.itemId);
        	this.ds_search.setColumn(0,"PRODUCTDEFVERSION",this.parent.itemRev);
        	this.ds_search.setColumn(0,"SQL_ID","selectItemWarehouseList");

        	var sSvcID 			= "selectItemWarehouseList";
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
        			case "selectItemWarehouseList":

        				if(this.ds_list.rowcount < 1){
        					var nRow = this.ds_list.addRow();
        					this.ds_list.setColumn(nRow,"ENTERPRISEID",this.gf_getEnterpriseId());
        					this.ds_list.setColumn(nRow,"PRODUCTDEFID",this.parent.itemId);
        					this.ds_list.setColumn(nRow,"PRODUCTDEFVERSION",this.parent.itemRev);
        					this.ds_list.setColumn(nRow,"PLANTID",this.gf_getSiteType());
        					var productType = this.parent.itemType;

        					if(productType=="SubAssembly"){ //반제품이면 완료창고 SUB45를 기본값으로 지정
        						this.ds_list.setColumn(nRow,"WAREHOUSEID","SUB45");
        						this.ds_list.setColumn(nRow,"WAREHOUSENAME","SUB 창고");
        					} else {

        						if(this.parent.itemId.substr(0,1)=="1"){
        							//this.ds_list.setColumn(nRow,"WAREHOUSEID","0Main01");
        							//this.ds_list.setColumn(nRow,"WAREHOUSENAME","안산 자재");

        							//2021-05-27 정원식 대리 요청
        							this.ds_list.setColumn(nRow,"WAREHOUSEID","FGI01");
        							this.ds_list.setColumn(nRow,"WAREHOUSENAME","안산생산제품");

        						}
        					}
        				}
        			break;

        			case "saveItemWarehouse":
        				this.close();
        			break;
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
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

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	if(svcId =="GRD_WAREHOUSE"){
        		oArg.arg_rtnCols = "CODE|NAME";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "GRD_WAREHOUSE")
        	{
        		var nRow = this.ds_list.rowposition;
        		this.ds_list.setColumn(nRow, "WAREHOUSEID", rtn[0]);
        		this.ds_list.setColumn(nRow, "WAREHOUSENAME", rtn[1]);
        	}

        }
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

        	if (this.ds_list.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	/* 그리드 필수체크 */
        	var component = this.grd_result;
        	var strColIdList = "WAREHOUSEID";
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;


        	var sSvcID 			= "saveItemWarehouse";
        	var sController 	= "/bas02100/saveItemWarehouse.do";
        	var sInDatasets 	= "INPUT=ds_list:A";
        	var sOutDatasets  	= "";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        this.grd_result_onexpandup = function(obj,e)
        {
        		if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "WAREHOUSEID")) {
        		this.fn_openPop("GRD_WAREHOUSE","P00107"); //창고 조회
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_result.addEventHandler("onexpandup",this.grd_result_onexpandup,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("BAS02100P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
